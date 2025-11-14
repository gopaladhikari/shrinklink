import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "Redirecting...",
};

type Params = {
  params: Promise<{
    shortId: string;
  }>;
};

export default async function Page({ params }: Params) {
  const { shortId } = await params;

  const res = await fetch(`http://localhost:3000/api/${shortId}`, {
    redirect: "manual",
  });

  if (res.status === 302) {
    const location = res.headers.get("location");
    redirect(location!);
  }

  return <main></main>;
}
