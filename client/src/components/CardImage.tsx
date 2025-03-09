import Image from "next/image";
import { Card } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

interface CardExtend extends Omit<Card, "subtitle" | "description"> {
  subtitle?: string[] | null;
  description?: string[] | null;
}

interface CardImageProps {
  data: CardExtend;
  className: string;
}

const CardImage = ({ data, className }: CardImageProps) => {
  return (
    <div
      className={cn(
        "relative mb-20 w-full p-10 h-full max-h-[600px] flex flex-col items-center rounded-lg",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-slate-800 opacity-75 h-full rounded-md w-full" />

        <Image
          src={urlFor(data?.image)?.url()}
          className="object-cover max-h-[600px] rounded-md w-full h-full"
          width={1920}
          height={1080}
          alt={`bg_${data?._id}`}
          blurDataURL={urlFor(data?.image)?.url()}
        />
      </div>

      <div className="relative z-50 w-full flex flex-col items-start justify-end text-white mt-auto">
        <h1 className="font-bold text-xl">{data?.title as string}</h1>
        {/* {data?.subtitle?.map(sub,index=>(
          
        <p>{sub}</p>
        ))} */}

        {data?.subtitle?.map((sub, index) => (
          <p key={index + 1}>{sub}</p>
        ))}
        {data?.description?.map((sub, index) => (
          <p key={index + 1} className="ml-5">
            • {sub}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImage;
