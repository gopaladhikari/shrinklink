"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,theme(colors.indigo.500/20),transparent_60%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-3xl"
      >
        <Card
          shadow="lg"
          className="border border-white/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/40"
        >
          <CardBody className="p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr]">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "anticipate" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30"
                  >
                    <Icon icon="solar:link-bold" height={40} />
                  </motion.div>
                </motion.div>

                <h1 className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
                  404
                </h1>
                <p className="mt-3 text-balance text-base text-foreground-500 sm:text-lg">
                  Oops! The page you’re looking for couldn’t be found.
                </p>
                <p className="mt-1 text-pretty text-sm text-foreground-400 sm:text-base">
                  It may have been moved, deleted, or never existed.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    as={Link}
                    href="/"
                    color="primary"
                    size="md"
                    className="shadow-md shadow-indigo-500/20"
                    startContent={
                      <Icon icon="solar:home-2-linear" className="h-5 w-5" />
                    }
                  >
                    Back to Home
                  </Button>
                  <Button
                    as={Link}
                    href="/"
                    variant="flat"
                    size="md"
                    startContent={
                      <Icon icon="solar:bug-linear" className="h-5 w-5" />
                    }
                  >
                    Report an issue
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="pointer-events-none absolute -right-24 top-10 hidden h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl sm:block"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pointer-events-none absolute -left-24 bottom-10 hidden h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl sm:block"
      />
    </section>
  );
}
