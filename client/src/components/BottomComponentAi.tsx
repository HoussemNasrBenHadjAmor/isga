import Link from "next/link";
import { RelatedNewsQueryResult } from "@/sanity/types";
import { relatedLinks } from "@/constants";
import { useTranslations } from "next-intl";
import { CarouselAi, ContactForm, Content, Maps } from "@/components";
import { Button } from "./ui/button";

interface BottomComponentAiPropos {
  id: string;
  related?: RelatedNewsQueryResult;
  displayRelated?: boolean;
  displayForm?: boolean;
  displayBlogs?: boolean;
}

const BottomComponentAi = ({
  related,
  displayRelated,
  displayForm,
  displayBlogs,
}: BottomComponentAiPropos) => {
  const t = useTranslations("AiPage");

  const blogContent = {
    _rev: "",
    _type: "simple",
    _createdAt: "",
    _updatedAt: "",
    _id: "x_a",
    title: [t("blogs.title")],
  };

  const relatedContent = {
    _rev: "",
    _type: "simple",
    _createdAt: "",
    _updatedAt: "",
    _id: "x_b",
    title: [t("related.title")],
  };

  const contactContent = {
    _rev: "",
    _type: "simple",
    _createdAt: "",
    _updatedAt: "",
    _id: "x_c",
    title: [t("contact.title")],
  };

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
              <Link href="/newsletter">{t("blogs.button")}</Link>
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
