import { cn } from "@/lib/utils";

const CardImage = ({ data, className }: any) => {
  return (
    <div
      className={cn(
        " relative my-20 w-full p-10 h-full max-h-[600px] flex flex-col items-center rounded-lg",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-slate-800 opacity-75 h-full rounded-md w-full" />
        <img
          src={data.url}
          alt="bg-contact"
          className="object-cover max-h-[600px] rounded-md w-full h-full"
        />
      </div>

      <div className="relative z-50 w-full flex flex-col items-start justify-end text-white mt-auto">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <p>{data.description}</p>
        {data.subtitle.map((sub: string) => (
          <p key={sub.text} className="ml-5">
            • {sub.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardImage;
