import { DOMAIN } from "@/lib/constants";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

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
  } else {
    const data = await res.json();

    throw new Error(data.message || "Something went wrong");
  }

  return (
    <section>
      <h1 className="hidden">Redirecting ...</h1>
    </section>
  );
}
