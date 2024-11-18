import {
  BackgroundImage,
  Card,
  CommunComponent,
  CommunTitle,
  ContactForm,
  Landing,
  Maps,
} from "@/components";
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
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {contactCard.map((card) => (
            <Card key={card.title} data={card} flex />
          ))}
        </div>

        <div className="my-20 pb-20">
          <CommunTitle title="Contact Us" />
          <p className="text-center -mt-16 mb-16">
            Feel free to contact us anytime.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Maps />
            <ContactForm />
          </div>
        </div>
      </CommunComponent>
    </>
  );
};

export default page;
