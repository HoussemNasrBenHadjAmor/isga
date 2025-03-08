import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Card } from "@/sanity/types";
import { default_landing_url } from "@/constants";

interface CardImageProps {
  data: Card | null;
  className?: string;
}

const CardImageIndustries = ({ data }: CardImageProps) => {
  return (
    <div className="flex flex-col mt-20 gap-3 lg:gap-0 rounded-lg">
      <div className="w-full">
        <Image
          height="1080"
          width="1920"
          src={
            data?.image ? urlFor(data.image as any).url() : default_landing_url
          }
          alt="background"
          className="object-cover rounded-tr-lg rounded-tl-lg lg:rounded-lg w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center p-3 lg:px-10 gap-3 w-full">
        {data?.title && <h1 className="font-bold text-xl"> {data.title} </h1>}
        {data?.subtitle &&
          data?.subtitle?.map((det, index) => <p key={index + 1}>{det}</p>)}
        {data?.description?.map((des, index) => (
          <p className={`${data?.details && "ml-3"}`} key={index + 1}>
            • {des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImageIndustries;
