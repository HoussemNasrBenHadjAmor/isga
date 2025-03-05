import { edit_client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";

const integrateCardSchema = async () => {
  const query = '*[_type == "card"]';
  const posts = await edit_client.fetch(query);

  const transaction = edit_client.transaction();

  posts.forEach((post: any) => {
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
};

const integrateLandingSchema = async () => {
  const query = '*[_type == "landing"]';
  const posts = await edit_client.fetch(query);

  const transaction = edit_client.transaction();

  posts.forEach((post: any) => {
    // Migrate title
    const newTitle = (post.title || []).map((text: string) => ({
      _type: "object",
      _key: nanoid(),
      en: text || "", // Fallback to empty string if text is missing
      fr: "",
      ar: "",
    }));

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

    const newAuthor = {
      _type: "object",
      en: post.author,
      fr: "",
      ar: "",
    };

    transaction.patch(post._id, {
      set: {
        newTitle: newTitle,
        newSubtitle: newSubtitle,
        newDescription: newDescription,
        newAuthor: newAuthor,
      },
    });
  });
  await transaction.commit();
};

const integrateSimpleSchema = async () => {
  const query = '*[_type == "simple"]';
  const posts = await edit_client.fetch(query);

  const transaction = edit_client.transaction();

  posts.forEach((post: any) => {
    // Migrate title
    const newTitle = (post.title || []).map((text: string) => ({
      _type: "object",
      _key: nanoid(),
      en: text || "", // Fallback to empty string if text is missing
      fr: "",
      ar: "",
    }));

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
};

const integrateHomeISGASchema = async () => {
  const query = '*[_type == "chooseISGA"]';
  const posts = await edit_client.fetch(query);

  const transaction = edit_client.transaction();

  posts.forEach((post: any) => {
    // Migrate title
    const newTitle = {
      _type: "object",
      _key: nanoid(),
      en: post.title || "", // Fallback to empty string if text is missing
      fr: "",
      ar: "",
    };

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
        newDescription: newDescription,
      },
    });
  });
  await transaction.commit();
};

const integrateLandingSchemaOne = async () => {
  const query = '*[_type == "landing"]';
  const posts = await edit_client.fetch(query);
  const transaction = edit_client.transaction();

  posts.forEach((card: any) => {
    // Copy newTitle to title, newSubtitle to subtitle and newDescription to description
    const newTitleData = card.newTitle || [];
    const newSubtitleData = card.newSubtitle || [];
    const newDescriptionData = card.newDescription || [];
    const newAuthorData = card.newAuthor || [];

    // Add patches to the transaction
    transaction.patch(card._id, {
      set: {
        subtitle: newSubtitleData,
        title: newTitleData,
        description: newDescriptionData,
        author: newAuthorData,
      }, // Update the title, subtitle and description field with newTitle, newSubtitle and newDescription data
    });
  });

  await transaction.commit();
};

const integrateCardSchemaOne = async () => {
  const query = '*[_type == "simple"]';
  const posts = await edit_client.fetch(query);
  const transaction = edit_client.transaction();

  posts.forEach((card: any) => {
    // Copy newTitle to title, newSubtitle to subtitle and newDescription to description
    const newTitleData = card.newTitle || [];
    const newSubtitleData = card.newSubtitle || [];
    const newDescriptionData = card.newDescription || [];

    // Add patches to the transaction
    transaction.patch(card._id, {
      set: {
        subtitle: newSubtitleData,
        title: newTitleData,
        description: newDescriptionData,
      }, // Update the title, subtitle and description field with newTitle, newSubtitle and newDescription data
    });
  });

  await transaction.commit();
};

const integrateHomeISGASchemaOne = async () => {
  const query = '*[_type == "chooseISGA"]';
  const posts = await edit_client.fetch(query);
  const transaction = edit_client.transaction();

  posts.forEach((card: any) => {
    // Copy newTitle to title, newSubtitle to subtitle and newDescription to description
    const newTitleData = card.newTitle || [];
    const newDescriptionData = card.newDescription || [];

    // Add patches to the transaction
    transaction.patch(card._id, {
      set: {
        title: newTitleData,
        description: newDescriptionData,
      }, // Update the title, subtitle and description field with newTitle, newSubtitle and newDescription data
      unset: ["newTitle", "newDescription"],
    });
  });

  await transaction.commit();
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    integrateHomeISGASchemaOne();

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
