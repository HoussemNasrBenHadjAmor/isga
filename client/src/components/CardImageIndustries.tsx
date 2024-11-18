import Image from "next/image";
import React from "react";

const CardImageIndustries = ({ data, className }: any) => {
  return (
    <div className="flex flex-col mb-20 gap-3 lg:gap-0 rounded-lg">
      <div className="w-full">
        <Image
          height="1080"
          width="1920"
          src={data.url}
          alt="background"
          className="object-cover rounded-tr-lg rounded-tl-lg lg:rounded-lg w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center p-3 lg:px-10 gap-3 w-full">
        {data?.title && <h1 className="font-bold text-xl"> {data.title} </h1>}
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

export default CardImageIndustries;
