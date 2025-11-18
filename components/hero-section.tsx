"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FadeInImage } from "./fade-in-image";
import Link from "next/link";
import { URLShortForm } from "./URL-short-form";

// TODO: Improve UI

export function HeroSection() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col overflow-hidden">
      <div className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <div className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="text-center text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text">
              <h1>ShrinkLink - Shorten your links</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p> URL shortener tool provided by </p>
            <Button
              className="border-default-100 bg-default-50 text-small text-default-500 h-9 overflow-hidden border-1 px-[18px] py-2 leading-5 font-normal"
              endContent={
                <Icon
                  className="flex-none outline-hidden [&>path]:stroke-2"
                  icon="solar:arrow-right-linear"
                  width={20}
                />
              }
              radius="full"
              variant="bordered"
              href="https://x.com/gopuadks"
              target="_blank"
              as={Link}
            >
              @gopuadks
            </Button>
          </div>
          <URLShortForm />
          <p className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]"></p>
        </div>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
            alt="Gradient background"
            fill
          />
        </div>
      </div>
    </div>
  );
}
