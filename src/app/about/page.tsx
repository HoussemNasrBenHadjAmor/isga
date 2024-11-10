import {
  BackgroundImage,
  CommunComponent,
  Landing,
  CardImage,
} from "@/components";
import { aboutText, aboutCardImg } from "@/constants";

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
        <div className="gap-3 flex flex-col">
          <h1 className="font-extrabold text-4xl">Our ESG Commitments</h1>
          <div>
            <p>
              We believe in the power of collective action to create an
              inclusive community and a healthy planet.
            </p>
            <p>
              Above all, we believe in our share of responsibility in this great
              universal collaboration and are willing to invest in creating
              value for a better world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          {aboutCardImg.map((card) => (
            <CardImage
              key={card.id}
              data={card}
              className="last:md:col-span-2"
            />
          ))}
        </div>
      </CommunComponent>
    </>
  );
};

export default page;
