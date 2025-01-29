import { Simple } from "@/sanity/types";

interface ContectProps {
  data: Simple | null;
  noCenter?: boolean;
  withPoint?: boolean;
}

const Content = ({ data, noCenter, withPoint = true }: ContectProps) => {
  return (
    <div className="px-5 w-full mb-20">
      <div
        className={`
        flex flex-col leading-relaxed ${noCenter ? "items-start" : "items-center justify-center max-w-3xl text-center mx-auto"} gap-3 
        `}
      >
        {data?.title?.map((title) => (
          <h1 key={title} className="font-extrabold text-4xl">
            {title}
          </h1>
        ))}
        {data?.subtitle?.map((subtitle) => <p key={subtitle}>{subtitle}</p>)}
        {data?.description?.map((des) => (
          <p key={des} className={`${withPoint ? "ml-3" : "text-gray-600"}`}>
            {withPoint ? `• ${des}` : des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Content;
