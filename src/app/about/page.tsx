import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundImage, CommunComponent } from "@/components";
import { aboutText } from "@/constants";

const page = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={aboutText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center relative w-full">
          <div className="z-30 w-full px-2 max-w-7xl mx-auto my-40 flex flex-col justify-center items-center text-center lg:text-left">
            <div className="flex flex-col items-center justify-center lg:items-start gap-5 w-full text-white">
              <div className="max-w-2xl flex flex-col gap-5">
                <h1 className="font-semibold text-xl md:text-3xl">
                  {aboutText.title}
                </h1>
                <h5 className="font-semibold text-md md:text-2xl">
                  {aboutText.subtitle}
                </h5>
                <p className="text-xs sm:text-sm lg:text-base">
                  {aboutText.description}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-5">
                <Button
                  asChild
                  className="bg-[#102136] border-2 border-transparent p-5 hover:bg-[#5e3fde]"
                >
                  <Link href="/about">About</Link>
                </Button>
                <Button className="border-2 p-5 hover:bg-[#5e3fde] bg-transparent">
                  <Link href="/about">Our services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommunComponent>hi</CommunComponent>
    </>
  );
};

export default page;
