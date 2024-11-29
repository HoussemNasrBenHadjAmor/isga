import Image from "next/image";
import { Card } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { default_landing_url } from "@/constants";

interface CardImageProps {
  data: Card | null;
  maxWidth?: boolean;
  index?: number;
}

const CardImageService = ({ data, maxWidth, index }: CardImageProps) => {
  const isEven = index ? index % 2 === 0 : false;

  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-center my-20 gap-3 lg:gap-0 rounded-lg bg-[#424267] shadow-2xl ${
        isEven && "lg:flex-row-reverse flex-col-reverse"
      }`}
    >
      <div
        className={`${maxWidth && "lg:max-w-md"}
      ${!maxWidth && "lg:w-[50%]"}
      max-h-[400px] w-full`}
      >
        <Image
          height="1080"
          width="1920"
          src={
            data?.image ? urlFor(data?.image as any).url() : default_landing_url
          }
          alt="background"
          className={`h-full w-full object-cover max-h-[400px] rounded-tr-lg ${
            isEven &&
            "rounded-br-lg rounded-bl-lg rounded-tr-none lg:rounded-none lg:rounded-br-lg lg:rounded-tr-lg"
          } ${!isEven && "lg:rounded-tr-none rounded-tl-lg lg:rounded-bl-lg"}`}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-start p-3 lg:p-10 gap-2 text-white
        ${!maxWidth && "lg:w-[50%]"}
        `}
      >
        {data?.title && <p>{data.title}</p>}
        {data?.subtitle?.map((des) => <p key={des}>{des}</p>)}
        {data?.description?.map((des) => (
          <p className="ml-3" key={des}>
            • {des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImageService;
