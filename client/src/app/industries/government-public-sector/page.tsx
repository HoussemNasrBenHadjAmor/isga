import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Landing,
  CardImageIndustries,
} from "@/components";

import { getGovernmentPage } from "@/sanity/lib/pages";
import { generateMetadataHelper, industriesImage } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getGovernmentPage,
    locationsMetadata: industriesImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getGovernmentPage({ id: language });
  if (!data || data?.length === 0) {
    notFound();
  }
  const response = data ? data[0] : null;

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

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {response?.card?.map((item) => (
            <CardImageIndustries data={item} key={item?._id} />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
