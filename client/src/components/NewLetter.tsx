import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";

import { MoveRight } from "lucide-react";

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const day = date.getDate(); // Get the day (1-31)
  const month = date.toLocaleString("en-US", { month: "long" }); // Get full month name
  const year = date.getFullYear(); // Get the full year
  return `${day} ${month} ${year}`;
};

const NewLetter = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/newsletter/${data?.slug.current}`}>
        <div className="relative overflow-hidden h-64 w-full rounded-lg">
          <Image
            alt="image"
            src={urlFor(data?.image).url()}
            width={1920}
            height={1080}
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
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
