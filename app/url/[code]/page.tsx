import { DOMAIN } from "@/lib/constants";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "Redirecting...",
};

export default async function Page({ params }: Params<"code">) {
  const { code } = await params;

  const res = await fetch(`${DOMAIN}/api/${code}`, {
    redirect: "manual",
  });

  if (res.status === 302) {
    const location = res.headers.get("location") as string;
    redirect(location);
  } else throw new Error("Something went wrong");
}
