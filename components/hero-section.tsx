"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FadeInImage } from "./fade-in-image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col overflow-hidden">
      <section className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
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
          <p className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]"></p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="bg-default-foreground text-small text-background h-10 w-[163px] px-[16px] py-[10px] leading-5 font-medium"
              radius="full"
              as={Link}
              href="/signup"
            >
              Get Started
            </Button>
            <Button
              className="border-default-100 text-small h-10 w-[163px] border-1 px-[16px] py-[10px] leading-5 font-medium"
              endContent={
                <span className="bg-default-100 pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
              as={Link}
              href="/sign-in"
            >
              See our plans
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
            alt="Gradient background"
            fill
          />
        </div>
      </section>
    </div>
  );
}
