import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "Redirecting...",
};

export default async function Page({ params }: Params<"code">) {
  const { code } = await params;

  const res = await fetch(`http://localhost:3000/api/${code}`, {
    redirect: "manual",
  });

  if (res.status === 302) {
    const location = res.headers.get("location");
    redirect(location!);
  }

  return (
    <section>
      <h1>Redirecting ...</h1>
    </section>
  );
}
