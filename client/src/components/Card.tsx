import React from "react";
import { cn } from "@/lib/utils";
import { Card as CardType } from "@/sanity/types";
import SvgFromDataUrl from "./SvgFromDataUrl";

interface CardExtend extends Omit<CardType, "subtitle" | "description"> {
  subtitle?: string[];
  description?: string[];
}

interface CardProps {
  data: CardExtend;
  className?: string;
  flex?: boolean;
}

const Card = ({ data, className, flex }: CardProps) => {
  return (
    <div
      className={cn(
        `rounded-md text-center shadow-sm border-[1px] p-12 flex flex-col gap-3 justify-center items-center ${
          flex && "lg:items-center lg:justify-center"
        } ${
          !flex && "lg:items-start lg:text-start"
        }  hover:bg-[#7456F1] hover:text-white transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-[#7556f177]`,
        className
      )}
    >
      <div className={`${flex && "flex flex-col items-center justify-center"}`}>
        {data?.svg_path && <SvgFromDataUrl dataUrl={data?.svg_path} />}
      </div>
      <h4 className="font-bold text-lg">{data?.title as string}</h4>
      <p className="text-xs">{data?.subtitle}</p>
      <p>{data?.description}</p>
    </div>
  );
};

export default Card;
