import { Metadata } from "next";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Landing,
  Widget,
} from "@/components";

import { getProjectPage } from "@/sanity/lib/pages";
import { projectServiceMetadata } from "@/constants";

export const metadata: Metadata = projectServiceMetadata;

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value?.toLowerCase() || "en";
  const data = await getProjectPage({ id: language });
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
