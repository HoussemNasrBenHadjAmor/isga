import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { PortableText } from "next-sanity";
import { useTranslations } from "next-intl";
import { getNewLetterPage } from "@/sanity/lib/pages";
import { NewsSinglePageQueryResult } from "@/sanity/types";
import { myPortableTextComponents } from "@/lib/PortableText";
import { Download } from "lucide-react";
import { CommunComponent, NewsLanding } from "@/components";
import { generateMetadataHelper, newletterImage } from "@/constants";

// metadata fetching
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return generateMetadataHelper({
    slug,
    fetchData: getNewLetterPage,
    locationsMetadata: newletterImage,
  });
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const { slug } = await params;

  const data = await getNewLetterPage({ id: language, slug });

  if (!data || data.length === 0) {
    notFound();
  }

  const product = data[0];

  return (
    product && (
      <div>
        <NewsLanding data={product} />
        <CommunComponent>
          <BlogDetails data={product} />
        </CommunComponent>
      </div>
    )
  );
};

export default page;

const BlogDetails = ({ data }: { data: NewsSinglePageQueryResult[number] }) => {
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
        {data?.details && Array.isArray(data?.details) && (
          <PortableText
            value={data.details}
            components={myPortableTextComponents}
          />
        )}
      </div>
    </div>
  );
};
