import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import {
  BackgroundImage,
  CommunComponent,
  Landing,
  CardImage,
  Content,
} from "@/components";

import { getAboutPage } from "@/sanity/lib/pages";
import { Card as CardType } from "@/sanity/types";

import { cn } from "@/lib/utils";

import { generateMetadataHelper, aboutImage } from "@/constants";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getAboutPage,
    locationsMetadata: aboutImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const data = await getAboutPage({ id: language });

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

        <Landing data={response?.landing} />
      </div>
      <CommunComponent>
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {response?.card_primary?.map((item) => {
            return (
              <Card
                key={item?._id}
                data={item}
                className="first:md:row-span-2 first:lg:row-span-4 last:md:col-span-2"
              />
            );
          })}
        </div>

        {/* {response?.content <Content data={item} noCenter />)} */}

        <Content data={response?.content} noCenter />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {response?.card_secondary?.map((card) => (
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

interface CardExtend extends Omit<CardType, "subtitle" | "description"> {
  subtitle?: string[];
  description?: string[];
}
interface cardProp {
  data: CardExtend;
  index?: number;
  className?: string;
}

const Card = ({ data, className }: cardProp) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {!data?.title && <div className="md:mt-4" />}
      <h3 className="font-bold text-lg">{data?.title as string}</h3>
      {data?.subtitle &&
        data?.subtitle.map((sub, index: number) => {
          return (
            <div className="gap-1 flex flex-col" key={index + 1}>
              <h5 className="text-gray-600 font-semibold"> {sub} </h5>

              {data?.description && data?.description[index]}
            </div>
          );
        })}

      {!data?.subtitle?.length &&
        data?.description &&
        data?.description.map((des, index: number) => (
          <p key={index + 1}>{des}</p>
        ))}
    </div>
  );
};
