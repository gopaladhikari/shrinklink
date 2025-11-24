import { connectToDb } from "@/lib/db";
import { URL } from "@/models/urls.schema";
import { NextResponse } from "next/server";
import { MESSAGES } from "@/constants";

export async function GET(_req: Request, ctx: RouteContext<"/api/[code]">) {
  try {
    const { code } = await ctx.params;

    await connectToDb();

    const url = await URL.findOne({ code });

    if (!url) throw new Error(MESSAGES.ERROR.URL_NOT_FOUND);

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
