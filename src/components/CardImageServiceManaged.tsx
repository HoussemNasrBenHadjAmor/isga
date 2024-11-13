import Image from "next/image";
import React from "react";

const CardImageService = ({ data, index }: any) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row mb-20 gap-3 lg:gap-0 rounded-lg ${
        isEven && "lg:flex-row-reverse flex-col-reverse"
      }`}
    >
      <div className="w-full max-h-[400px] h-full">
        <Image
          height="1080"
          width="1920"
          src={data.url}
          alt="background"
          className="object-cover rounded-tr-lg rounded-tl-lg lg:rounded-lg w-full max-h-[400px] h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-start p-3 lg:px-10 gap-3 w-full">
        {data?.title && <h1 className="font-bold text-2xl"> {data.title} </h1>}
        {data?.details &&
          data?.details?.map((det: any) => <p>{det.content}</p>)}
        {data?.description?.map((des: any) => (
          <p className={`${data?.details && "ml-3"}`} key={des.content}>
            • {des.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImageService;
