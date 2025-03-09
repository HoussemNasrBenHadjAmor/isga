import { edit_client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming form data
    const data = await req.formData();

    // Initialize a structured object
    const formData: Record<string, any> = {};

    // Populate the object with form data
    for (const [key, value] of data.entries()) {
      formData[key] = value;
    }

    // Create first the file in the database to use it as a reference when creating the candidate
    const { _id } = await edit_client.assets.upload("file", formData.file);

    // Create a new candidate document
    if (_id) {
      const candidate = {
        _type: "candidate",
        fullname: formData.username,
        email: formData.email,
        job: {
          _type: "reference",
          _ref: formData.category_id,
        },
        resume: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: _id, // this is the _id from up above
          },
        },
      };

      await edit_client.create(candidate);
    } else {
      throw new Error("Internal server error");
    }

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
