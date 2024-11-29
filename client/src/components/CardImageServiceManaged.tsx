import Image from "next/image";
import { default_landing_url } from "@/constants";
import { urlFor } from "@/sanity/lib/image";
import { Card } from "@/sanity/types";

interface CardImageServiceProps {
  data: Card | null;
  index?: number;
}

const CardImageService = ({ data, index }: CardImageServiceProps) => {
  const isEven = index && index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row mt-20 gap-3 lg:gap-0 rounded-lg ${
        !isEven && "lg:flex-row-reverse flex-col-reverse"
      }`}
    >
      <div className="w-full max-h-[400px] h-full">
        <Image
          height="1080"
          width="1920"
          src={
            data?.image ? urlFor(data?.image as any).url() : default_landing_url
          }
          alt="background"
          className="object-cover rounded-tr-lg rounded-tl-lg lg:rounded-lg w-full max-h-[400px] h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-start p-3 lg:px-10 gap-3 w-full">
        <h1 className="font-bold text-2xl"> {data?.title} </h1>
        {data?.subtitle && data?.subtitle?.map((det: any) => <p>{det}</p>)}
        {data?.description?.map((des: any) => (
          <p className="ml-3" key={des}>
            • {des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImageService;
