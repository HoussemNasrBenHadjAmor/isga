import { client } from "@/sanity/lib/client";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  // Enable draft mode
  (await draftMode()).enable();

  return NextResponse.redirect(new URL(redirectTo, request.url));
}
