// import { getTestPage } from "@/sanity/lib/pages";
// import { cookies } from "next/headers";
import ButtonCLick from "@/components/ButtonCLick";

const Test = async () => {
  // Await the cookies() function
  // const cookieStore = await cookies();
  // const language = cookieStore.get("language")?.value?.toLowerCase() || "en";

  // const data = await getTestPage({ id: language });
  // const response = data[0];

  return (
    <div className="mt-96 min-h-screen">
      {/* <p>Title : {response?.title}</p> */}
      {/* <p>Content : {response?.content}</p> */}
      <ButtonCLick />
    </div>
  );
};

export default Test;
