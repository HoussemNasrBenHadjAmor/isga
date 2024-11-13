import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";
import {
  managedServicesText,
  managedServicesCard,
  managedServicesMiddle,
} from "@/constants";

const page = () => {
  const url =
    "https://isgaconsult.com/wp-content/uploads/2024/02/app-woman-white-solution-closeup-two-min-scaled.jpg";
  return (
    <div>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={managedServicesText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Why choose ISGA Consult?" />
        <div className="max-w-4xl mx-auto -mt-10 leading-relaxed mb-20 px-5">
          <p className="mb-5">{managedServicesMiddle.subtitle}</p>
          {managedServicesMiddle.description.map((des) => (
            <p className="ml-3 mt-2">• {des.content}</p>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          {managedServicesCard.map((item, index) => (
            <CardImageServiceManaged data={item} index={index + 1} />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
