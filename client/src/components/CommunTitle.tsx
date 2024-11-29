import { Simple } from "@/sanity/types";

interface CommunTitlePropos {
  data: Simple | null;
}

const CommunTitle = ({ data }: CommunTitlePropos) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20">
      {data?.title?.map((title) => (
        <h1 className="font-bold text-4xl pb-5" key={title}>
          {title}
        </h1>
      ))}
      <div className="max-w-[200px] w-full border-b-4 border-[#424267]" />
    </div>
  );
};

export default CommunTitle;
