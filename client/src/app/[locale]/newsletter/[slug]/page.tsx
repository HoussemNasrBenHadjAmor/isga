import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import { CommunComponent, NewsLanding } from "@/components";
import { getNewLetterPage } from "@/sanity/lib/pages";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "@/lib/PortableText";
import { Download } from "lucide-react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const { slug } = await params;

  const data = await getNewLetterPage(slug, language);
  const product = data ? data[0] : [];

  return (
    <div>
      <NewsLanding data={product} />
      <CommunComponent>
        <BlogDetails data={product} />
      </CommunComponent>
    </div>
  );
};

export default page;

const BlogDetails = ({ data }: any) => {
  const t = useTranslations("news");

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      {data?.file && (
        <a
          className="cursor-pointer w-fit text-xs justify-center items-center flex flex-col font-semibold"
          href={`${data?.file}?dl=`}
        >
          <Download className="h-4 w-4" />
          <p>{t("button")}</p>
        </a>
      )}
      <div className="prose max-w-none mt-8">
        {Array.isArray(data?.details) && (
          <PortableText
            value={data?.details}
            components={myPortableTextComponents}
          />
        )}
      </div>
    </div>
  );
};
