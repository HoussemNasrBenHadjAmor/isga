import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Content,
  Landing,
} from "@/components";

import { getCarrersPage } from "@/sanity/lib/pages";

const page = async () => {
  const data = await getCarrersPage();
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
        <div></div>
      </CommunComponent>
    </div>
  );
};

export default page;
