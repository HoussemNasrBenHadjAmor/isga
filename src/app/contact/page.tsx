import { BackgroundImage, CommunComponent, Landing } from "@/components";
import { contactText } from "@/constants";

const page = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={contactText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        <Landing data={contactText} />
      </div>
      <CommunComponent>hi</CommunComponent>
    </>
  );
};

export default page;
