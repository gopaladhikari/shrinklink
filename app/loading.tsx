"use client";

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-60px)]">
      <Spinner variant="wave" size="lg" />
    </section>
  );
}
