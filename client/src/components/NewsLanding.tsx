import Image from "next/image";

import cover from "../../public/newsletter_cover.png";
import { urlFor } from "@/sanity/lib/image";
import { HomeQueryResult } from "@/sanity/types";

interface NewsLanidngProps {
  data?: HomeQueryResult[number]["landing"];
  center?: boolean;
  noDate?: boolean;
}

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const day = date.getDate(); // Get the day (1-31)
  const month = date.toLocaleString("en-US", { month: "long" }); // Get full month name
  const year = date.getFullYear(); // Get the full year
  return `${day} ${month} ${year}`;
};

const NewsLanding = ({ data, center, noDate }: NewsLanidngProps) => {
  return (
    <div className="relative flex w-full md:min-h-[550px] h-full">
      {/* Background and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          // src={data ? data?.url : cover}
          src={data?.image ? urlFor(data?.image).url() : cover}
          className="w-full h-full min-h-[500px] object-cover"
          alt="background"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 bg-black opacity-70 h-full min-h-[550px]" />
      </div>
      <div
        className={`px-5 flex flex-col items-start justify-center relative ${
          center && "text-center items-center"
        } w-full h-full min-h-[550px] max-w-7xl mx-auto`}
      >
        {data && !noDate ? (
          <div className="max-w-xl flex flex-col gap-4 text-white text-2xl md:text-4xl justify-center">
            <p className="text-xl">{formatDate(data?._createdAt)}</p>

            <h1 className="font-semibold">{data?.title as string}</h1>
          </div>
        ) : data && noDate ? (
          <h1 className="text-white text-5xl">{data?.title as string}</h1>
        ) : (
          <h1 className="text-white text-5xl">NEWS & INSIGHTS</h1>
        )}
      </div>
    </div>
  );
};

export default NewsLanding;
