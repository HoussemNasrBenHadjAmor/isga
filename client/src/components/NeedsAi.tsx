import { Card, Simple } from "@/sanity/types";

interface NeedsAiProps {
  data?: Card[];
  content?: Simple;
}

const NeedsAi = ({ data, content }: NeedsAiProps) => {
  return (
    <div className="px-5 w-full mb-20 flex flex-col gap-10">
      {content?.title?.map((title) => (
        <h1 key={title} className="font-extrabold text-4xl">
          {title}
        </h1>
      ))}
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
        <div className="md:max-w-xs">
          {content?.description?.map((des) => <p key={des}>{des}</p>)}
        </div>
        <div className="w-px bg-gray-300 mx-3" />
        <div className="space-y-7">
          {data?.map((card) => (
            <div className="space-y-2" key={card?._id}>
              <p className="font-semibold">{card?.title}</p>
              {card?.description?.map((des) => (
                <p className="text-sm" key={des}>
                  {des}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedsAi;
