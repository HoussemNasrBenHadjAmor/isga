import { Simple, HomeQueryResult } from "@/sanity/types";

interface ContectProps {
  data: HomeQueryResult[number]["content"] | Simple | null;
  noCenter?: boolean;
  withPoint?: boolean;
}

const Content = ({ data, noCenter, withPoint = true }: ContectProps) => {
  return (
    <div className="px-5 w-full mb-20">
      <div
        className={`
        flex flex-col leading-relaxed ${
          noCenter
            ? "items-start"
            : "items-center justify-center max-w-3xl text-center mx-auto"
        } gap-3 
        `}
      >
        {data?.title?.map((title, index) => (
          <h1 key={index + 1} className="font-extrabold text-4xl">
            {title}
          </h1>
        ))}
        {data?.subtitle?.map((subtitle, index) => (
          <p key={index + 1}>{subtitle}</p>
        ))}
        {data?.description?.map((des, index) => (
          <p
            key={index + 1}
            className={`${withPoint ? "ml-3" : "text-gray-600"}`}
          >
            {withPoint ? `• ${des}` : des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Content;
