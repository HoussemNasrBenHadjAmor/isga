import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getAiSoftwarePage, getRelatedNews } from "@/sanity/lib/pages";
import {
  CardAi,
  CarouselAi,
  CommunComponent,
  Content,
  AccordionAi,
  LocationLanding,
  BottomComponentAi,
} from "@/components";
import { aiImage, generateMetadataHelper } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getAiSoftwarePage,
    locationsMetadata: aiImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const [data, relatedData] = await Promise.all([
    getAiSoftwarePage({ id: language }),
    getRelatedNews({ id: language }),
  ]);

  if (!data || data?.length === 0) {
    notFound();
  }
  const response = data[0];

  return (
    <div>
      <LocationLanding data={response?.landing} />
      <CommunComponent>
        <Content data={response?.first_content} noCenter withPoint={false} />
        <div className="flex flex-col gap-4 mb-20">
          {response?.first_card?.map((card) => (
            <CardAi key={card._id} data={card} flex />
          ))}
        </div>
        <Content data={response?.second_content} noCenter withPoint={false} />
        <CarouselAi data={response?.second_card} nbItem="1/3" />
        <Content data={response?.third_content} noCenter withPoint={false} />
        <CarouselAi data={response?.third_card} nbItem="1/2" />
        <Content data={response?.fourth_content} noCenter withPoint={false} />
        <AccordionAi data={response?.faq} />
        <BottomComponentAi
          related={relatedData}
          displayBlogs
          displayRelated
          displayForm
        />
      </CommunComponent>
    </div>
  );
};

export default page;
