import {
  BackgroundImage,
  CardImageService,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";
import {
  technologiesAndPlatformsText,
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
        <Landing data={technologiesAndPlatformsText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Application Services and Solutions" />
        <div className="text-center max-w-3xl mx-auto -mt-10 leading-relaxed mb-20 px-5">
          <p>
            Elevate your organization’s digital capabilities with our
            comprehensive suite of technology solutions. From empowering digital
            transformation initiatives through expert ERP services to leveraging
            cutting-edge platforms such as ServiceNow, Salesforce, and
            Microsoft, we offer a spectrum of services encompassing
            consultation, implementation, customization, and ongoing support.
            Our commitment to excellence is evident in our proficiency in
            automating processes, optimizing workflows, and enhancing operations
            across human resources, finance, IT, and customer support domains.
            Whether it’s ServiceNow’s AI-driven SaaS cloud platform,
            Salesforce’s mastery in deployment and customization, or Microsoft’s
            integrated suite including 365, Dynamics, and Power Platform, our
            team ensures a seamless and tailored approach to meet the unique
            needs of your business. Drive innovation, collaboration, and
            operational excellence with our solutions, designed to navigate the
            complexities of today’s dynamic business landscape and future-proof
            your organization.
          </p>
        </div>

        {technologiesAndPlatformsCard.map((item, index) => (
          <CardImageService data={item} index={index + 1} />
        ))}
      </CommunComponent>
    </div>
  );
};

export default page;
