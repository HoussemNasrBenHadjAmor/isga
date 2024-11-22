import { Simple } from "@/sanity/types";

interface ContectProps {
  data: Simple;
}

const Content = ({ data }: ContectProps) => {
  return (
    <div className="px-5 w-full">
      <div className="flex flex-col justify-center items-center gap-4 max-w-xl text-center mx-auto">
        {data.title?.map((title) => (
          <h1 key={title} className="font-extrabold text-4xl">
            {title}
          </h1>
        ))}
        {data.subtitle?.map((subtitle) => <p key={subtitle}>{subtitle}</p>)}
        {data.description?.map((des) => <p key={des}>{des}</p>)}
      </div>
    </div>
  );
};

export default Content;
