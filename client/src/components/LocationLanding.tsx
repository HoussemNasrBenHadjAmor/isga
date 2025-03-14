import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { Landing } from "@/sanity/types";
import cover from "../../public/newsletter_cover.png";

interface LocationsLandingProps {
  data: Landing;
  center?: boolean;
}

const LocationLanding = ({ data, center }: LocationsLandingProps) => {
  return (
    <div className="relative flex w-full md:max-h-[720px] h-full">
      {/* Background and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          // src={data ? data?.url : cover}
          // src={urlFor(data?.image).url() ?? cover}
          src={data?.image ? urlFor(data?.image).url() : cover}
          unoptimized={true}
          className="w-full h-full md:max-h-[720px] object-cover"
          alt="background"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 bg-black opacity-40 h-full md:max-h-[720px]" />
      </div>
      <div
        className={`px-5 flex flex-col items-start justify-center relative ${
          center && "text-center items-center"
        } w-full h-full lg:min-h-[720px] min-h-screen max-w-7xl mx-auto`}
      >
        {data ? (
          <div className="flex flex-col gap-4 text-2xl md:text-4xl text-white">
            <h1 className="font-semibold">{data?.title}</h1>
            {data?.subtitle?.map((subtitle, index) => (
              <p className="text-xl md:text-3xl" key={index + 1}>
                {subtitle}
              </p>
            ))}
          </div>
        ) : (
          <h1 className="text-white text-5xl">Global Offices</h1>
        )}
      </div>
    </div>
  );
};

export default LocationLanding;
