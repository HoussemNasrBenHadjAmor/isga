import { Metadata } from "next";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Landing,
  CardImageIndustries,
} from "@/components";

import { getGovernmentPage } from "@/sanity/lib/pages";
import { governmentIndustriesMetadata } from "@/constants";

export const metadata: Metadata = governmentIndustriesMetadata;

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getGovernmentPage({ id: language });
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
