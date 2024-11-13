import { BackgroundImage, Card, CommunComponent, Landing } from "@/components";
import { contactCard, contactText } from "@/constants";

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
      <CommunComponent>
        <div className="gap-10 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {contactCard.map((card) => (
            <Card key={card.title} data={card} flex />
          ))}
        </div>
      </CommunComponent>
    </>
  );
};

export default page;
