import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { connectToDb } from "@/lib/db";
import { URLS } from "@/models/urls.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectToDb();

    const code = nanoid(6);

    const url = await URLS.findOneAndUpdate(
      { orginalUrl: body.url },
      { code, orginalUrl: body.url },
      { upsert: true, new: true }
    ).lean();

    return NextResponse.json({
      message: "Url shortened successfully",
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
