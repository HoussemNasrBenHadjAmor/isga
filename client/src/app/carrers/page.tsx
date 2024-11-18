import { BackgroundImage, CommunComponent, Landing } from "@/components";
import { carrersText } from "@/constants";

const page = () => {
  const url =
    "https://isgaconsult.com/wp-content/uploads/2024/02/photo-1459180129673-eefb56f79b45.png";
  return (
    <div>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={carrersText} />
      </div>
      <CommunComponent></CommunComponent>
    </div>
  );
};

export default page;
