import { Metadata } from "next";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  Card,
  CardImageService,
  CommunComponent,
  CommunTitle,
  Landing,
} from "@/components";

import { getConsultingPage } from "@/sanity/lib/pages";
import { consultingServiceMetadata } from "@/constants";

export const metadata: Metadata = consultingServiceMetadata;

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value?.toLowerCase() || "en";
  const data = await getConsultingPage({ id: language });
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
        <CommunTitle data={response?.title_section_primary} />

        <div className="flex flex-col gap-4">
          {response?.card_primary?.map((item) => (
            <CardImageService maxWidth data={item} key={item._id} />
          ))}
        </div>

        <CommunTitle data={response?.title_section_secondary} />

        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {response?.card?.map((card) => (
            <Card key={card._id} data={card} flex />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
