import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { Location as LocationType } from "@/sanity/types";

interface LocationPropos {
  data: LocationType;
}

const Location = ({ data }: LocationPropos) => {
  return (
    <Link href={`/locations/${data?.slug_en}`} className="relative">
      <div className="absolute top-3 left-3 z-30 text-black p-[3px] rounded-sm font-bold text-lg bg-gray-100 shadow-2xl shadow-green-600 bg-opacity-60">
        <p>{data.slug?.toUpperCase()}</p>
      </div>

      <div className="relative overflow-hidden h-64 w-full rounded-lg">
        <Image
          alt="image"
          src={urlFor(data?.image).url()}
          width={1920}
          height={1080}
          className="rounded-lg w-full h-full object-cover transition-transform duration-500 hover:scale-110 bg-opacity-30"
        />
      </div>
    </Link>
  );
};

export default Location;
