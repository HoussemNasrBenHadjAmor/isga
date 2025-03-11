import Link from "next/link";
import Image from "next/image";
// import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, RelatedNewsQueryResult } from "@/sanity/types";

import { CardAi, NewLetter } from "@/components";

// valid basis values
type NbItemOption = "1/2" | "1/3" | "1/4" | "1/5" | "1/6";

// class map
const basisClasses: Record<NbItemOption, string> = {
  "1/2": "lg:basis-1/2",
  "1/3": "lg:basis-1/3",
  "1/4": "lg:basis-1/4",
  "1/5": "lg:basis-1/5",
  "1/6": "lg:basis-1/6",
};

type Link = {
  _id: string;
  link: string;
  image: string;
  name: string;
};

interface CarouselAiProps {
  data: Card[] | RelatedNewsQueryResult | Link[];
  nbItem?: string;
  displayArrow?: boolean;
  type?: string;
}

const CarouselAi = ({
  data,
  nbItem = "1/3",
  displayArrow = true,
  type = "card",
}: CarouselAiProps) => {
  const t = useTranslations("AiPage");

  return (
    <Carousel className="w-full mb-20">
      <CarouselContent className="-ml-1">
        {data?.map((card, index) => (
          <CarouselItem
            key={card._id}
            className={`pl-1 md:basis-1/2 ${
              basisClasses[nbItem as NbItemOption]
            }`}
          >
            <div className="p-1 w-full h-full">
              {type === "card" ? (
                <CardAi key={card?._id} data={card as Card} />
              ) : type === "news" ? (
                <NewLetter data={card} key={card?._id} />
              ) : (
                <Link href={(card as Link).link}>
                  <div className="flex items-center gap-5 bg-[#f6f7fa]">
                    <div className="bg-[#cad7f0] p-5 justify-center items-center flex">
                      <Image
                        width={50}
                        height={50}
                        src={(card as Link).image}
                        alt="image"
                        className="object-cover"
                      />
                    </div>
                    {/* {(card as Link).name} */} {t(`related.links.${index}`)}
                    {}
                  </div>
                </Link>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {displayArrow && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default CarouselAi;
