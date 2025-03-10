import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cookies } from "next/headers";
import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { urlFor } from "@/sanity/lib/image";
import { getHomePage } from "@/sanity/lib/pages/index";
import { homeMetadata } from "@/constants";
import { Card as CardType, HomeQueryResult } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import {
  BackgroundImage,
  Card,
  CardChoose,
  CommunComponent,
  Content,
  Landing,
} from "@/components";

export const metadata: Metadata = homeMetadata;

export default async function Home() {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";

  // Fetch the HomePage data
  const data = await getHomePage({ id: language });
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
        <Content data={response?.content} />

        <div className="gap-10 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {response?.card_primary?.map((card) => (
            <Card key={card._id} data={card} className="last:md:col-span-2" />
          ))}
        </div>
      </CommunComponent>

      <WhyIsga data={response?.home_isga} />

      <CommunComponent>
        <AskQuestion data={response?.card_secondary} />
      </CommunComponent>
    </>
  );
}

interface AskQuestionProps {
  data: CardType[] | null;
}

const AskQuestion = async ({ data }: AskQuestionProps) => {
  const t = await getTranslations("HomePage");
  return (
    <>
      {data?.map((item) => (
        <div
          key={item._id}
          className="relative w-full p-10 flex flex-col justify-center items-center h-[250px]"
        >
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-[#7556f1] rounded-lg h-full" />
            <img
              src={urlFor(item?.image).url()}
              alt="bg-contact"
              className="opacity-5 w-full object-cover max-h-[250px] -z-50"
            />
          </div>

          <div className="relative z-50 w-full text-center xl:text-start">
            <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-5">
              <Link href="/contact" legacyBehavior passHref>
                <a className="text-white text-xl xl:text-3xl font-extrabold max-w-md cursor-pointer">
                  {item?.title as string}
                </a>
              </Link>

              <Button
                className="bg-white text-black hover:bg-[#424267] hover:text-white p-7 transition-all duration-300"
                asChild
              >
                <Link href="/contact">{t("ContactButton")}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

interface WhyIsgaProps {
  data: HomeQueryResult[number]["home_isga"] | null;
}

const WhyIsga = ({ data }: WhyIsgaProps) => {
  return (
    <div className=" bg-[#F9FAFC]">
      <div className="lg:mx-auto max-w-7xl mx-5 px-5 flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <Image
            alt="new-york"
            src={urlFor(data?.image).url()}
            width="1080"
            height="1080"
            className="object-cover w-full h-full max-h-[400px] lg:max-h-full"
            placeholder="blur"
            blurDataURL={urlFor(data?.image).url()}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:p-5">
          <div className="flex flex-col gap-4 text-center xl:text-start">
            <h3 className="text-4xl font-extrabold">{data?.title}</h3>
            {data?.description?.map((des, index) => (
              <p className="text-[#4D5D6D]" key={index + 1}>
                {data?.description}
              </p>
            ))}
          </div>

          {data?.cards?.map((card) => (
            <CardChoose data={card} key={card?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
