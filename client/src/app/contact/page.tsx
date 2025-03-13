import { notFound } from "next/navigation";
import { cookies } from "next/headers";
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
import { contactImage, generateMetadataHelper } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getContactPage,
    locationsMetadata: contactImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getContactPage({ id: language });

  if (!data || data?.length === 0) {
    notFound();
  }

  const response = data[0];

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
            <Card key={card._id} data={card} flex />
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
