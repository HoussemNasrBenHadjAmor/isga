import {
  BackgroundImage,
  CommunComponent,
  Landing,
  CardImage,
} from "@/components";
import { aboutText, aboutCardImg, aboutCardText } from "@/constants";

import { cn } from "@/lib/utils";

const page = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={aboutText.background_url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        <Landing data={aboutText} />
      </div>
      <CommunComponent>
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutCardText.map((item, index) => {
            return (
              <Card
                key={item?.title || item?.description[0].content}
                item={item}
                index={index + 1}
                className="first:md:row-span-2 first:lg:row-span-4 last:md:col-span-2"
              />
            );
          })}
        </div>

        <OurESG />
      </CommunComponent>
    </>
  );
};

export default page;

export const Card = ({ item, className }: any) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {!item.title && <div className="md:mt-4" />}
      <h3 className="font-bold text-lg">{item.title}</h3>
      {item?.subtitle &&
        item?.subtitle.map((sub: any, index: any) => {
          return (
            <div className="gap-1 flex flex-col">
              <h5 className="text-gray-600 font-semibold"> {sub.content} </h5>

              {item.description[index].content}
            </div>
          );
        })}

      {!item?.subtitle &&
        item?.description &&
        item?.description.map((des: any) => <p>{des.content}</p>)}
    </div>
  );
};

export const OurESG = () => {
  return (
    <>
      <div className="gap-3 flex flex-col">
        <h1 className="font-extrabold text-4xl">Our ESG Commitments</h1>
        <div>
          <p>
            We believe in the power of collective action to create an inclusive
            community and a healthy planet.
          </p>
          <p>
            Above all, we believe in our share of responsibility in this great
            universal collaboration and are willing to invest in creating value
            for a better world.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {aboutCardImg.map((card) => (
          <CardImage key={card.id} data={card} className="last:md:col-span-2" />
        ))}
      </div>
    </>
  );
};
