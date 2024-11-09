import { homeCards, homeText } from "@/constants";
import {
  BackgroundImage,
  Card,
  CommunComponent,
  HomeLanding,
} from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={homeText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <HomeLanding data={homeText} />
      </div>
      <CommunComponent>
        <div className="px-5">
          <div className="flex flex-col justify-center items-center gap-4 max-w-xl text-center mx-auto">
            <h1 className="font-extrabold text-4xl">What we do ? </h1>
            <p>
              We focus on a co-creative approach, offering unparalleled skills
              to help you achieve your innovation, growth, and profitability
              objectives.
            </p>
          </div>

          <div className="gap-10 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {homeCards.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </div>

          <div className="relative w-full p-10 flex flex-col justify-center items-center h-[250px]">
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-[#7556f1] rounded-lg h-full" />
              <img
                src="https://isgaconsult.com/wp-content/uploads/2020/12/pattern.svg"
                alt="bg-contact"
                className="opacity-5 w-full object-cover max-h-[250px] -z-50"
              />
            </div>

            <div className="relative z-50 w-full text-center xl:text-start">
              <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-5">
                <Link href="/contact" legacyBehavior passHref>
                  <a className="text-white text-xl xl:text-3xl font-extrabold max-w-md cursor-pointer">
                    Do you have any question? Feel free to contact us anytime.
                  </a>
                </Link>

                <Button
                  className="bg-white text-black hover:bg-[#424267] hover:text-white p-7 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Contact us now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CommunComponent>
    </>
  );
}
