import {
  BackgroundImage,
  CommunComponent,
  Landing,
  CardImage,
  Content,
} from "@/components";
import { aboutText, aboutCardImg, aboutCardText } from "@/constants";
import { getAboutPage } from "@/sanity/lib/pages";

import { cn } from "@/lib/utils";
import { Card as CardType } from "@/sanity/types";

const page = async () => {
  const data = await getAboutPage();
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage data={data[0].landing} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        <Landing data={data[0].landing} />
      </div>
      <CommunComponent>
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data[0]?.card_primary?.map((item, index) => {
            return (
              <Card
                key={item?._id}
                data={item}
                index={index + 1}
                className="first:md:row-span-2 first:lg:row-span-4 last:md:col-span-2"
              />
            );
          })}
        </div>

        {/* {data[0]?.content <Content data={item} noCenter />)} */}

        <Content data={data[0]?.content} noCenter />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {data[0]?.card_secondary?.map((card) => (
            <CardImage
              key={card._id}
              data={card}
              className="last:md:col-span-2"
            />
          ))}
        </div>
      </CommunComponent>
    </>
  );
};

export default page;

interface cardProp {
  data: CardType;
  index?: number;
  className?: string;
}

export const Card = ({ data, className }: cardProp) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {!data.title && <div className="md:mt-4" />}
      <h3 className="font-bold text-lg">{data?.title}</h3>
      {data?.subtitle &&
        data?.subtitle.map((sub, index) => {
          return (
            <div className="gap-1 flex flex-col">
              <h5 className="text-gray-600 font-semibold"> {sub} </h5>

              {data?.description && data?.description[index]}
            </div>
          );
        })}

      {!data?.subtitle &&
        data?.description &&
        data?.description.map((des: any) => <p>{des}</p>)}
    </div>
  );
};
