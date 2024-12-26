import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
const formatDate = (isoString: any) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const NewLetter = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/newsletter/${data?.slug.current}`}>
        <Image
          alt="image"
          src={urlFor(data?.image).url()}
          width={1920}
          height={1080}
          className="h-[250px] w-full object-cover rounded-lg"
        />
      </Link>

      <div className="flex flex-col gap-3">
        <h5 className="text-gray-500 text-xs underline font-bold">
          {formatDate(data?._createdAt)}
        </h5>
        <Link href={`/newsletter/${data?.slug.current}`}>
          <h4 className="font-bold text-xl line-clamp-2">{data?.title}</h4>
        </Link>
        <p className="font-medium text-lg line-clamp-2 lg:line-clamp-3">
          {data?.subtitle}
        </p>
        <Link
          href={`/newsletter/${data?.slug.current}`}
          className="flex space-x-1 items-center font-bold"
        >
          <p>Read more</p>
          <MoveRight />
        </Link>
      </div>
    </div>
  );
};

export default NewLetter;
