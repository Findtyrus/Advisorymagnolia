"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: FadeInProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0, delay: 0 }
          : { duration, delay, ease: [0.25, 0.4, 0.25, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
