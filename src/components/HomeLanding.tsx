import Link from "next/link";
import { Button } from "./ui/button";

const HomeLanding = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full px-5">
      <div className="z-30 w-full px-2 max-w-7xl mx-auto my-40 flex flex-col justify-center items-center text-center lg:text-left">
        <div className="flex flex-col items-center justify-center lg:items-start gap-5 w-full text-white">
          <div className="max-w-2xl flex flex-col gap-5">
            <h1 className="font-semibold text-xl md:text-3xl">{data.title}</h1>
            <h5 className="font-semibold text-md md:text-2xl">
              {data.subtitle}
            </h5>
            <p className="text-xs sm:text-sm lg:text-base">
              {data.description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <Button
              asChild
              className="bg-[#102136] border-2 border-transparent p-5 hover:bg-[#5e3fde]"
            >
              <Link href="/about">About</Link>
            </Button>
            <Button
              asChild
              className="border-2 p-5 hover:bg-[#5e3fde] bg-transparent"
            >
              <Link href="/about">Our services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
