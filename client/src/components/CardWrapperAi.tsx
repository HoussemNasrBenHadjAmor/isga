import { urlFor } from "@/sanity/lib/image";
import { Card } from "@/sanity/types";
import Image from "next/image";

interface CardWrapperAiProps {
  data: Card[];
}

const CardWrapperAi = ({ data }: CardWrapperAiProps) => {
  const content = data[0];
  return (
    <div className="flex flex-col md:flex-row gap-10 mb-20 md:items-stretch lg:items-center">
      {content?.image && (
        <Image
          unoptimized={true}
          width={300}
          height={300}
          className="object-cover rounded-md w-auto h-auto max-h-[300px] md:max-h-full"
          src={urlFor(content?.image).url()}
          alt="imageWrapper"
        />
      )}
      <div className="space-y-3">
        {content?.subtitle?.length ? (
          <>
            {content?.subtitle?.map((title, index) => {
              return (
                <div className="space-y-1 text-sm" key={`div${index}`}>
                  <h2 className="font-semibold">{title}</h2>
                  <p>{content?.description && content?.description[index]}</p>
                </div>
              );
            })}
          </>
        ) : (
          <div className="flex flex-col gap-3">
            {content?.description?.map((des) => (
              <p className="text-sm" key={des}>
                {des}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWrapperAi;
