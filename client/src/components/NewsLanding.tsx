import Image from "next/image";

import cover from "../../public/newsletter_cover.png";

interface NewsLanidngProps {
  data?: [];
}

const NewsLanding = ({ data }: NewsLanidngProps) => {
  return (
    <div className="relative flex w-full">
      {/* Background and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data ? data?.url : cover}
          className="w-full h-[500px] object-cover"
          alt="background"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 bg-black opacity-60 h-[500px]" />
      </div>
      <div className="px-5 flex flex-col items-center justify-center relative w-full h-[500px] text-center">
        {data ? (
          <div>
            <p>Date</p>

            <h1>Title</h1>
          </div>
        ) : (
          <h1 className="text-white text-5xl">NEWS & INSIGHTS</h1>
        )}
      </div>
    </div>
  );
};

export default NewsLanding;
