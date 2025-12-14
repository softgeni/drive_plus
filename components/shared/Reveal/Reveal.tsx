"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { RevealProps } from "@/types";
import { fadeIn } from "@/hooks";

export const Reveal = ({
  children,
  className,
  delay,
  position,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show"); // 👈 antes decía visible
      slideControls.start("show"); // 👈 antes decía visible
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn(position, delay)}
        initial="hidden"
        animate={mainControls}
        exit={"hidden"}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
