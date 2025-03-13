import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Landing,
  Widget,
} from "@/components";

import { getCyberPage } from "@/sanity/lib/pages";
import { generateMetadataHelper, servicesImage } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getCyberPage,
    locationsMetadata: servicesImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getCyberPage({ id: language });
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
        <Widget data={response?.card} />
      </CommunComponent>
    </div>
  );
};

export default page;
