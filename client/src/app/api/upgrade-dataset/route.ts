import { edit_client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const query = '*[_type == "card"]';
    const posts = await edit_client.fetch(query);

    const transaction = edit_client.transaction();

    posts.forEach((post: any, index: number) => {
      // Migrate title
      const newTitle = {
        _type: "object",
        en: post.title,
        fr: "",
        ar: "",
      };

      // Migrate subtitle
      const newSubtitle = (post.subtitle || []).map((text: string) => ({
        _type: "object",
        _key: nanoid(),
        en: text || "", // Fallback to empty string if text is missing
        fr: "",
        ar: "",
      }));

      // Migrate description
      const newDescription = (post.description || []).map((text: string) => ({
        _type: "object",
        _key: nanoid(),
        en: text || "", // Fallback to empty string if text is missing
        fr: "",
        ar: "",
      }));

      transaction.patch(post._id, {
        set: {
          newTitle: newTitle,
          newSubtitle: newSubtitle,
          newDescription: newDescription,
        },
      });
    });

    await transaction.commit();

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
