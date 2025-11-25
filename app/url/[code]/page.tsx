import { site } from "@/constants";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "Redirecting...",
};

export default async function Page({ params }: Params<"code">) {
  const { code } = await params;

  const res = await fetch(`${site.url}/api/${code}`, {
    redirect: "manual",
  });

  if (res.status === 302) {
    const location = res.headers.get("location") as string;
    redirect(location);
  } else {
    const body = await res.json();

    throw new Error(body.message);
  }
}
