import { cookies } from "next/headers";
import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";

import { getTelecommunicationsPage } from "@/sanity/lib/pages";
import { generateMetadataHelper, industriesImage } from "@/constants";
import { notFound } from "next/navigation";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getTelecommunicationsPage,
    locationsMetadata: industriesImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getTelecommunicationsPage({ id: language });
  if (!data || data?.length === 0) {
    notFound();
  }
  const response = data[0];
  return (
    <div>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage data={response?.landing} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={response?.landing} />
      </div>
      <CommunComponent>
        <CommunTitle data={response?.title_section} />

        {response?.card?.map((item, index) => (
          <CardImageServiceManaged data={item} key={index + 1} />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
