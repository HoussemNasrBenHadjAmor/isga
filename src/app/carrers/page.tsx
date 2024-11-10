import { BackgroundImage, CommunComponent, Landing } from "@/components";
import { careersText } from "@/constants";

const carrers = () => {
  return (
    <>
      {/* Background and Overlay */}
      <div className="relative flex min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={careersText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        <Landing data={careersText} />
      </div>
      <CommunComponent>hi</CommunComponent>
    </>
  );
};

export default carrers;
