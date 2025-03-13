import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getAiRdPage } from "@/sanity/lib/pages";
import {
  CardAi,
  CommunComponent,
  Content,
  LocationLanding,
  BottomComponentAi,
} from "@/components";
import { aiImage, generateMetadataHelper } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getAiRdPage,
    locationsMetadata: aiImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getAiRdPage({ id: language });
  if (!data || !data?.length) {
    notFound();
  }
  const response = data[0];

  return (
    <>
      <LocationLanding data={response?.landing} />
      <CommunComponent>
        <Content data={response?.first_content} noCenter withPoint={false} />

        <Content data={response?.second_content} withPoint={false} />

        <div className="flex flex-col gap-4 mb-20">
          {response?.second_card?.map((card) => (
            <CardAi key={card._id} data={card} flex bg={false} />
          ))}
        </div>

        <BottomComponentAi displayRelated displayForm />
      </CommunComponent>
    </>
  );
};

export default page;
