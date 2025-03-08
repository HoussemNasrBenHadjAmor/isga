import { Metadata } from "next";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Content,
  Landing,
} from "@/components";

import { getManagedPage } from "@/sanity/lib/pages";
import { managedServiceMetadata } from "@/constants";

export const metadata: Metadata = managedServiceMetadata;

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getManagedPage({ id: language });
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
        <Content data={response?.content} noCenter />

        {response?.card?.map((item, index) => (
          <CardImageServiceManaged data={item} key={item?._id} />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
