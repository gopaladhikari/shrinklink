import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { connectToDb } from "@/lib/db";
import { URLS } from "@/models/urls.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { orginalUrl } = body;

    if (!orginalUrl) {
      return NextResponse.json(
        {
          message: "URL is required",
        },
        {
          status: 400,
        }
      );
    }

    await connectToDb();

    const urlExists = await URLS.findOne({ orginalUrl });

    if (urlExists)
      return NextResponse.json(
        {
          message: "Short URL already exists",
          shortId: urlExists.shortId,
        },
        {
          status: 400,
        }
      );

    const shortId = nanoid(8);

    const newUrl = await URLS.create({
      orginalUrl,
      shortId,
    });

    return NextResponse.json(
      {
        message: "Short URL generated successfully",
        ...newUrl.toObject(),
      },
      {
        status: 200,
      }
    );
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
