import { cn } from "@/lib/utils";

const Card = ({ data: { Icon, title, description }, className }: any) => {
  return (
    <div
      className={cn(
        "rounded-md text-center shadow-sm border-[1px] p-12 flex flex-col gap-3 justify-center items-center lg:items-start lg:text-start hover:bg-[#7456F1] hover:text-white transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-[#7556f177]",
        className
      )}
    >
      <Icon />
      <h4 className="font-bold text-lg">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
