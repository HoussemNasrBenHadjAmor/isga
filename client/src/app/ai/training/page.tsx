import { cookies } from "next/headers";
import { getAiTrainingPage } from "@/sanity/lib/pages";
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

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value?.toLowerCase() || "en";
  const data = await getAiTrainingPage({ id: language });
  const response = data[0];

  return (
    <>
      <LocationLanding data={response?.landing} />
      <CommunComponent>
        <Content data={response?.first_content} noCenter withPoint={false} />
        <CardWrapperAi data={response?.first_card} />
        <Content data={response?.second_content} noCenter withPoint={false} />
        <div className="flex flex-col gap-7 mb-20">
          {response?.second_card?.map((card) => (
            <CardAi key={card._id} data={card} flex />
          ))}
        </div>
        <Content data={response?.third_content} noCenter withPoint={false} />
        <CarouselAi data={response?.third_card} />
        <NeedsAi
          data={response?.fourth_card}
          content={response?.fourth_content}
        />
        <Content data={response?.fifth_content} noCenter withPoint={false} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {response?.fifth_card?.map((card) => (
            <CardAi key={card._id} data={card} flex bg={false} />
          ))}
        </div>
        <Content data={response?.sixth_content} noCenter withPoint={false} />
        <AccordionAi data={response?.faq} />
        <BottomComponentAi displayRelated displayForm />
      </CommunComponent>
    </>
  );
};

export default page;
