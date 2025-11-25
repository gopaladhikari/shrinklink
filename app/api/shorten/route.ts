import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { connectToDb } from "@/lib/db";
import { URL } from "@/models/urls.schema";
import { messages } from "@/constants";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectToDb();

    const code = nanoid(6);

    const url = await URL.findOneAndUpdate(
      { orginalUrl: body.url },
      { code, orginalUrl: body.url },
      { upsert: true, new: true }
    ).lean();

    return NextResponse.json({
      message: messages.SUCCESS.URL_SHORTENED,
      ...url,
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
