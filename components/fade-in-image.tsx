"use client";

import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

const animationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function FadeInImage({ src, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded, animationControls]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={animationControls}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={animationVariants}
      >
        <Image
          {...props}
          alt={props.alt}
          src={src}
          onLoad={() => setIsLoaded(true)}
        />
      </m.div>
    </LazyMotion>
  );
}
