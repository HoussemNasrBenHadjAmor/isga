import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import { getLocationsPage } from "@/sanity/lib/pages";
import { generateMetadataHelper, locationsImage } from "@/constants";
import { LocationLanding, CommunComponent, Location } from "@/components";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getLocationsPage,
    locationsMetadata: locationsImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getLocationsPage({ id: language });

  if (!data || data?.length === 0) {
    notFound();
  }

  const response = data[0];

  return (
    <div>
      <LocationLanding center data={response?.landing} />
      <CommunComponent>
        <h1 className="text-4xl mb-10 font-bold">{response?.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
          {response?.locations?.map((data) => (
            <Location key={data._id} data={data} />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
