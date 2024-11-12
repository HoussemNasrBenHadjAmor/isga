import Image from "next/image";
import React from "react";

const CardImageService = ({ data, maxWidth, index }: any) => {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-center mb-20 gap-3 lg:gap-0 rounded-lg bg-[#424267] shadow-2xl ${
        index % 2 === 0 && "lg:flex-row-reverse flex-col-reverse"
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
          src={data.url}
          alt="background"
          className="h-full w-full object-cover max-h-[400px] rounded-tr-lg lg:rounded-tr-none rounded-tl-lg lg:rounded-bl-lg rounded-none"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-start p-3 lg:p-10 gap-2 text-white
        ${!maxWidth && "lg:w-[50%]"}
        `}
      >
        {data?.details && <p>{data.details}</p>}
        {data?.description.map((des: any) => (
          <p className={`${data?.details && "ml-3"}`} key={des.content}>
            • {des.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImageService;
