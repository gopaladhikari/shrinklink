"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-linear-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8 text-center">
          <motion.div variants={item} className="flex justify-center mb-6">
            <div className="p-4 bg-red-100 rounded-full">
              <Icon
                icon="heroicons:exclamation-triangle-20-solid"
                className="w-16 h-16 text-red-500"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Oops! {error.message}
          </motion.h1>

          <motion.p variants={item} className="text-gray-600 mb-8 text-lg">
            We&apos;re sorry, but an unexpected error has occurred. Please try
            again later or return to the home page.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              color="primary"
              className="w-full sm:w-auto"
              onPress={() => window.location.reload()}
              startContent={<Icon icon="heroicons:arrow-path-20-solid" />}
            >
              Try Again
            </Button>
            <Button
              variant="flat"
              className="w-full sm:w-auto"
              onPress={() => router.push("/")}
              startContent={<Icon icon="heroicons:home-20-solid" />}
            >
              Go to Home
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="bg-gray-50 p-4 text-center text-sm text-gray-500"
          variants={item}
        >
          <p>Error Code: 404 | Page Not Found</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
