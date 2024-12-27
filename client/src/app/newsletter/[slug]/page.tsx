import { CommunComponent, NewsLanding } from "@/components";
import { getNewLetterPage } from "@/sanity/lib/pages";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "@/lib/PortableText";
import { Download } from "lucide-react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const data = await getNewLetterPage(slug);
  const product = data ? data[0] : [];

  console.log("file", product?.file);

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
  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      {data?.file && (
        <a
          className="cursor-pointer w-fit text-xs justify-center items-center flex flex-col font-semibold"
          href={`${data?.file}?dl=`}
        >
          <Download className="h-4 w-4" />
          <p>Download</p>
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
