import { Metadata } from "next";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";

import { getFinancialPage } from "@/sanity/lib/pages";
import { financialIndustriesMetadata } from "@/constants";

export const metadata: Metadata = financialIndustriesMetadata;

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value?.toLowerCase() || "en";
  const data = await getFinancialPage({ id: language });
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

        {response?.card?.map((item, index) => (
          <CardImageServiceManaged
            data={item}
            index={index + 1}
            key={item._id}
          />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
