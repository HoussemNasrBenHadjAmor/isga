import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Landing,
  CardImageIndustries,
} from "@/components";
import { industriesPublicText, industriesPublicCard } from "@/constants";

const page = () => {
  const url =
    "https://isgaconsult.com/wp-content/uploads/2024/02/pollution-industry-exterior-daylight-min.jpg";
  return (
    <div>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={industriesPublicText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Telecommunications" />

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industriesPublicCard.map((item) => (
            <CardImageIndustries data={item} />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
