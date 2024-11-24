import {
  BackgroundImage,
  CommunComponent,
  CommunTitle,
  Landing,
  Widget,
} from "@/components";

import { getCyberPage } from "@/sanity/lib/pages";

const page = async () => {
  const data = await getCyberPage();
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
        <Widget data={response?.card} />
      </CommunComponent>
    </div>
  );
};

export default page;
