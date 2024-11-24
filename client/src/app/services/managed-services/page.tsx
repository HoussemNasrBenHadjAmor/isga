import {
  BackgroundImage,
  CardImageServiceManaged,
  CommunComponent,
  CommunTitle,
  Content,
  Landing,
} from "@/components";
import {
  managedServicesText,
  managedServicesCard,
  managedServicesMiddle,
} from "@/constants";
import { getManagedPage } from "@/sanity/lib/pages";

const page = async () => {
  const data = await getManagedPage();
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
        <Content data={response?.content} noCenter />

        {response?.card?.map((item, index) => (
          <CardImageServiceManaged data={item} index={index + 1} />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
