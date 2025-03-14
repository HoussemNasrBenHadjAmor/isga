import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  Card,
  CardImageService,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";
import { getApplicationPage } from "@/sanity/lib/pages";
import { generateMetadataHelper, servicesImage } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getApplicationPage,
    locationsMetadata: servicesImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getApplicationPage({ id: language });
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

        <div className="flex flex-col gap-4">
          {response?.card_primary?.map((item) => (
            <CardImageService maxWidth data={item} key={item._id} />
          ))}
        </div>

        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {response?.card_secondary?.map((item) => (
            <Card
              key={item._id}
              data={item}
              flex
              className="last:md:col-span-2"
            />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
