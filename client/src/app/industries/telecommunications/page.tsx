import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";
import {
  industriesTelecommunicationsText,
  industriesTelecommunicationsCard,
} from "@/constants";

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
        <Landing data={industriesTelecommunicationsText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Telecommunications" />

        {industriesTelecommunicationsCard.map((item, index) => (
          <CardImageServiceManaged data={item} index={index + 1} />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
