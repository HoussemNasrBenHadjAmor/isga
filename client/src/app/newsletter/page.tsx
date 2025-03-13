import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { NewsLanding, CommunComponent, NewsLetter } from "@/components";
import { generateMetadataHelper, newletterImage } from "@/constants";
import {
  getNewsPage,
  getNewsCategories,
  getNewsMetadataPage,
} from "@/sanity/lib/pages";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getNewsMetadataPage,
    locationsMetadata: newletterImage,
  });
}

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const resolvedSearchParams = await searchParams;

  // Extract and parse search parameters
  const category = resolvedSearchParams.category
    ? decodeURIComponent(resolvedSearchParams.category as string)
    : "";

  const date = (resolvedSearchParams.date as string) || "desc";

  const [news_data, news_metadata_data, news_categories] = await Promise.all([
    getNewsPage({
      id: language,
      category,
      order: date,
    }),

    getNewsMetadataPage({
      id: language,
    }),
    getNewsCategories({ id: language }),
  ]);

  if (
    !news_data ||
    news_data.length === 0 ||
    !news_metadata_data ||
    news_metadata_data.length === 0 ||
    !news_categories ||
    news_categories.length === 0
  ) {
    notFound();
  }

  const news = news_data;
  const news_metadata = news_metadata_data[0];

  return (
    <div>
      <NewsLanding center noDate={true} data={news_metadata} />
      <CommunComponent>
        <NewsLetter categories={news_categories} date={date} data={news} />
      </CommunComponent>
    </div>
  );
};

export default page;
