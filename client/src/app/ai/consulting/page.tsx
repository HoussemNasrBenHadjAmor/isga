import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getAiConsultingPage } from "@/sanity/lib/pages";
import {
  CardAi,
  CarouselAi,
  CommunComponent,
  Content,
  AccordionAi,
  LocationLanding,
  BottomComponentAi,
  CardWrapperAi,
  NeedsAi,
} from "@/components";
import { generateMetadataHelper, aiImage } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getAiConsultingPage,
    locationsMetadata: aiImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getAiConsultingPage({ id: language });

  if (!data || data?.length === 0) {
    notFound();
  }

  const response = data[0];

  return (
    <>
      <LocationLanding data={response?.landing} />
      <CommunComponent>
        <Content data={response?.first_content} noCenter withPoint={false} />
        <CardWrapperAi data={response?.first_card} />
        <Content data={response?.second_content} noCenter withPoint={false} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {response?.second_card?.map((card) => (
            <CardAi key={card._id} data={card} />
          ))}
        </div>
        <Content data={response?.third_content} noCenter withPoint={false} />

        <div className="flex flex-col gap-4 mb-20">
          {response?.third_card?.map((card) => (
            <CardAi key={card._id} data={card} flex />
          ))}
        </div>

        <Content data={response?.fourth_content} noCenter withPoint={false} />

        <CarouselAi data={response?.fourth_card} />

        <NeedsAi
          content={response?.fifth_content}
          data={response?.fifth_card}
        />

        <Content data={response?.sixth_content} noCenter withPoint={false} />
        <AccordionAi data={response?.faq} />
        <BottomComponentAi displayRelated displayForm />
      </CommunComponent>
    </>
  );
};

export default page;
