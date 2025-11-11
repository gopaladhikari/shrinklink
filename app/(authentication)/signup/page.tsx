import { SignUpForm } from "@/components/signup-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup to your account",
};

export default function Page() {
  return (
    <main>
      <SignUpForm />
    </main>
  );
}
