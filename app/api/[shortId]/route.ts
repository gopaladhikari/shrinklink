import { connectToDb } from "@/lib/db";
import { URLS } from "@/models/urls.schema";
import { NextResponse } from "next/server";

export async function GET(_req: Request, ctx: RouteContext<"/api/[shortId]">) {
  try {
    const { shortId } = await ctx.params;

    await connectToDb();

    const url = await URLS.findOne({ shortId });

    if (!url)
      return NextResponse.json(
        {
          message: "URL not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.redirect(url.orginalUrl, {
      status: 302,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
}
