import { RelatedNewsQueryResult, Simple } from "@/sanity/types";
import { CarouselAi, ContactForm, Content, Maps } from "@/components";
import { relatedLinks } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";

interface BottomComponentAiPropos {
  related?: RelatedNewsQueryResult;
  displayRelated?: boolean;
  displayForm?: boolean;
  displayBlogs?: boolean;
}

const blogContent: Simple = {
  _rev: "",
  _type: "simple",
  _createdAt: "",
  _updatedAt: "",
  _id: "x_a",
  title: ["Our blogs and latest news"],
};

const relatedContent: Simple = {
  _rev: "",
  _type: "simple",
  _createdAt: "",
  _updatedAt: "",
  _id: "x_b",
  title: ["Explore related services we are experts in"],
};

const contactContent: Simple = {
  _rev: "",
  _type: "simple",
  _createdAt: "",
  _updatedAt: "",
  _id: "x_c",
  title: ["Let’s discuss your next AI project"],
};

const BottomComponentAi = ({
  related,
  displayRelated,
  displayForm,
  displayBlogs,
}: BottomComponentAiPropos) => {
  return (
    <div className="flex flex-col gap-3">
      {displayBlogs && (
        <div>
          <Content data={blogContent} noCenter />
          <CarouselAi
            data={related as RelatedNewsQueryResult}
            displayArrow={false}
            type="news"
            nbItem="1/3"
          />
          <div className="w-auto items-center justify-center flex mb-20">
            <Button className="hover:bg-[#424267] hover:text-white p-7" asChild>
              <Link href="/newsletter">View More</Link>
            </Button>
          </div>
        </div>
      )}

      {displayForm && (
        <>
          <Content data={contactContent} />
          <div className="flex flex-col md:flex-row gap-5 mb-20">
            <Maps />
            <ContactForm />
          </div>
        </>
      )}

      {displayRelated && (
        <>
          <Content data={relatedContent} />

          <CarouselAi
            data={relatedLinks}
            displayArrow={false}
            type="links"
            nbItem="1/3"
          />
        </>
      )}
    </div>
  );
};

export default BottomComponentAi;
