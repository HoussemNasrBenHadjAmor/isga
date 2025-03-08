import { Metadata } from "next";
import { cookies } from "next/headers";
import { NewsLanding, CommunComponent, NewsLetter } from "@/components";
import { newsletterdata } from "@/constants";
import {
  getNewsPage,
  getNewsCategories,
  getNewsPage_v2,
} from "@/sanity/lib/pages";

export const metadata: Metadata = newsletterdata;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  const resolvedSearchParams = await searchParams;
  const news_categories = await getNewsCategories({ id: language });

  // Extract and parse search parameters
  const category = resolvedSearchParams.category
    ? decodeURIComponent(resolvedSearchParams.category as string)
    : "";

  const date = (resolvedSearchParams.date as string) || "desc";

  const news_data = await getNewsPage_v2({
    id: language,
    category,
    order: date,
  });

  const news = news_data ? news_data : null;

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
