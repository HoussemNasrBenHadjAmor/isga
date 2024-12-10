import { Metadata } from "next";
import {
  BackgroundImage,
  Card,
  CommunComponent,
  ContactForm,
  Content,
  Landing,
  Maps,
} from "@/components";

import { getContactPage } from "@/sanity/lib/pages";
import { contactMetadata } from "@/constants";

export const metadata: Metadata = contactMetadata;

const page = async () => {
  const data = await getContactPage();
  const response = data ? data[0] : null;
  return (
    <>
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
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {response?.card?.map((card) => (
            <Card key={card.title} data={card} flex />
          ))}
        </div>

        <div className="my-20">
          <Content data={response?.content} />

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
