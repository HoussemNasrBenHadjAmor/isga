import { urlFor } from "@/sanity/lib/image";
import { Card } from "@/sanity/types";
import Image from "next/image";
import { SvgFromDataUrl } from "@/components";

interface CardAiProps {
  data: Card;
  flex?: boolean;
  bg?: boolean;
}

const CardAi = ({ data, flex, bg = true }: CardAiProps) => {
  return (
    <div
      className={`flex ${flex ? "flex-col md:flex-row items-center text-center md:text-left" : "flex-col items-center justify-center text-center"} gap-5 ${bg && "bg-slate-100"} p-4 rounded-md w-full h-full`}
    >
      {data?.image && (
        <Image
          src={urlFor(data?.image).url()}
          className="object-cover"
          alt="background"
          height={75}
          width={75}
        />
      )}
      {data?.svg_path && (
        <div className="text-blue-400 bg-[#cad7f0] p-5 rounded-md">
          <SvgFromDataUrl dataUrl={data?.svg_path} />
        </div>
      )}

      <div className="flex flex-col gap-3 flex-1">
        <h5 className="font-bold text-xl">{data?.title}</h5>
        {data?.description?.map((desc) => (
          <p className="text-gray-600">{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default CardAi;
