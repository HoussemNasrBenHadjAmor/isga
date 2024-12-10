import { Metadata } from "next";
import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Content,
  Landing,
  Widget,
} from "@/components";

import { getArtificialPage } from "@/sanity/lib/pages";
import { artificialServiceMetadata } from "@/constants";

export const metadata: Metadata = artificialServiceMetadata;

const page = async () => {
  const data = await getArtificialPage();
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
        <Content data={response?.content} />

        <Widget data={response?.card} />
      </CommunComponent>
    </div>
  );
};

export default page;
