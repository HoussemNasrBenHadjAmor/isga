import {
  BackgroundImage,
  CardImageService,
  CommunComponent,
  CommunTitle,
  Landing,
  Widget,
} from "@/components";
import {
  artificalWidget,
  artificialText,
  technologiesAndPlatformsCard,
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
        <Landing data={artificialText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Artificial Intelligence" />
        <div className="max-w-4xl mx-auto -mt-10 leading-relaxed mb-20 px-5">
          <p>
            Our commitment to innovation allows us to identify and capitalize on
            high-impact opportunities for adoption. As a dedicated partner, we
            combine data, AI knowledge, and industry-specific expertise to
            create solutions and products that enable more effective
            decision-making. Our team includes trained AI talent with access to
            experts in other technology areas, businesses, and relevant
            industries, to support the building and implementation of creative
            and efficient AI solutions that work for you.
          </p>
        </div>

        <Widget data={artificalWidget} />
      </CommunComponent>
    </div>
  );
};

export default page;
