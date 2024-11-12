import {
  BackgroundImage,
  Card,
  CardImageService,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";
import {
  consultingServicesText,
  consultingServicesCard,
  consultingServicesCardText,
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
        <Landing data={consultingServicesText} />
      </div>
      <CommunComponent>
        <CommunTitle title="Consulting Service" />
        <CardImageService maxWidth data={consultingServicesCard} />

        <h1 className="text-center text-4xl font-bold">What we offer</h1>
        <div className="gap-10 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {consultingServicesCardText.map((card) => (
            <Card key={card.title} data={card} flex />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
