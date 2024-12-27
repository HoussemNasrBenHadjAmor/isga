import { NewsLanding, CommunComponent, NewsLetter } from "@/components";
import { newsletterdata } from "@/constants";
import { getNewsPage, getNewsCategories } from "@/sanity/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = newsletterdata;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const news_categories = await getNewsCategories();

  // Extract and parse search parameters
  const category = resolvedSearchParams.category
    ? decodeURIComponent(resolvedSearchParams.category as string)
    : "";

  const date = (resolvedSearchParams.date as string) || "desc";

  const news_data = await getNewsPage({
    category,
    order: date,
  });

  const news: any = news_data ? news_data : null;

  return (
    <div>
      <NewsLanding center />
      <CommunComponent>
        <NewsLetter categories={news_categories} date={date} data={news} />
      </CommunComponent>
    </div>
  );
};

export default page;
