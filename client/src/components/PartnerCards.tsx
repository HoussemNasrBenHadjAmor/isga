import { urlFor } from "@/sanity/lib/image";
import { HomeQueryResult } from "@/sanity/types";
import Image from "next/image";

interface PartnerCardsProps {
  data: HomeQueryResult[number]["partners"][number];
}
const PartnerCards = ({ data }: PartnerCardsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-xl w-full flex flex-col justify-center text-center items-center">
      <Image
        alt="partner"
        width={250}
        height={300}
        src={data?.image ? urlFor(data?.image).url() : null}
        unoptimized
        className="object-cover"
      />
    </div>
  );
};

export default PartnerCards;
