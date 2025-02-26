import { edit_client } from "@/sanity/lib/client";

export const migrateTitles = async () => {
  const query = '*[_type == "card"]';
  const posts = await edit_client.fetch(query);

  const transaction = edit_client.transaction();

  posts.forEach((post: any) => {
    // Migrate title
    const newTitle = {
      _type: "object",
      en: post.title,
      fr: "", // You can set default values or leave them empty
      ar: "",
    };

    // Migrate subtitle
    const newSubtitle = (post.subtitle || []).map((text: string) => ({
      _type: "object",
      en: text || "", // Fallback to empty string if text is missing
      fr: "",
      ar: "",
    }));

    // Migrate description
    const newDescription = (post.description || []).map((text: string) => ({
      _type: "object",
      en: text || "", // Fallback to empty string if text is missing
      fr: "",
      ar: "",
    }));

    transaction.patch(post._id, {
      set: { newTitle: newTitle, newSubtitle: newSubtitle, newDescription },
    });
  });

  try {
    await transaction.commit();
    console.log("All posts updated successfully");
  } catch (err) {
    console.error("Error updating posts:", err);
  }
};
