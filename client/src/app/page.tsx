import Link from "next/link";
import Image from "next/image";
import { homeCards, homeText, homeChoose } from "@/constants";
import {
  BackgroundImage,
  Card,
  CardChoose,
  CommunComponent,
  Landing,
} from "@/components";
import { Button } from "@/components/ui/button";
import { getHomePage } from "@/sanity/lib/pages/home";

export default async function Home() {
  const data = await getHomePage();
  console.log("data", data);

  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={homeText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={homeText} />
      </div>

      <CommunComponent>
        {/* <p>{data[0].landingHome.landingTitle}</p> */}

        <div className="px-5">
          <div className="flex flex-col justify-center items-center gap-4 max-w-xl text-center mx-auto">
            <h1 className="font-extrabold text-4xl">What we do ? </h1>
            <p>
              We focus on a co-creative approach, offering unparalleled skills
              to help you achieve your innovation, growth, and profitability
              objectives.
            </p>
          </div>
        </div>

        <div className="gap-10 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homeCards.map((card) => (
            <Card key={card.title} data={card} className="last:md:col-span-2" />
          ))}
        </div>
      </CommunComponent>

      <WhyIsga />

      <CommunComponent>
        <AskQuestion />
      </CommunComponent>
    </>
  );
}

const AskQuestion = () => {
  return (
    <div className="relative my-20 w-full p-10 flex flex-col justify-center items-center h-[250px]">
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
  );
};

const WhyIsga = () => {
  return (
    <div className=" bg-[#F9FAFC]">
      <div className="lg:mx-auto max-w-7xl mx-5 px-5 flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <Image
            alt="new-york"
            src="https://isgaconsult.com/wp-content/uploads/2024/02/vertical-low-angle-shot-skyscrapers-bright-sky-new-york-city-united-states-min-scaled.jpg"
            width="1080"
            height="1080"
            className="object-cover w-full h-full max-h-[400px] lg:max-h-full"
            placeholder="blur"
            blurDataURL="https://isgaconsult.com/wp-content/uploads/2024/02/vertical-low-angle-shot-skyscrapers-bright-sky-new-york-city-united-states-min-scaled.jpg"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:p-5">
          <div className="flex flex-col gap-4 text-center xl:text-start">
            <h3 className="text-4xl font-extrabold">
              Why choose Consltation ISGA?
            </h3>
            <p className="text-[#4D5D6D]">
              Consultation ISGA delivers business managed services through an
              “as-a-service” subscription model. We eclipse traditional and
              tactical outsourcing models of labour arbitrage and transactional
              services to help:
            </p>
          </div>

          {homeChoose.map((item) => (
            <CardChoose data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
