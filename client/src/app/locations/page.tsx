import { Metadata } from "next";

import { getLocationsPage } from "@/sanity/lib/pages";
import { locationsMetadata } from "@/constants";
import { LocationLanding, CommunComponent, Location } from "@/components";

export const metadata: Metadata = locationsMetadata;

const page = async () => {
  const data = await getLocationsPage();
  const response = data[0] ?? null;
  return (
    <div>
      <LocationLanding center data={response?.landing} />
      <CommunComponent>
        <h1 className="text-4xl mb-10 font-bold">Our offices</h1>
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
