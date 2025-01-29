import { Simple } from "@/sanity/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionAiProps {
  data: Simple[];
}

const AccordionAi = ({ data }: AccordionAiProps) => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-5 mb-20">
      {data?.map((item) => (
        <AccordionItem key={item._id} value={item?.title}>
          <AccordionTrigger className="p-6 bg-[#7556f1d0] text-white hover:no-underline rounded-md font-semibold">
            {item.title}
          </AccordionTrigger>
          {item?.description?.map((desc) => (
            <AccordionContent key={desc}>{desc}</AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionAi;
