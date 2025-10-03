"use client";

import { motion } from "framer-motion";
import { useTransition } from "@/context/TransitionContext";

export default function RevealAnimation({ children, delay = 0, ...props }) {
  const { isTransitioning } = useTransition();

  const variants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.8, ease: "easeInOut", delay },
    },
  };

  return (
    <div className="inline-block overflow-hidden" {...props}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isTransitioning ? "hidden" : "visible"}
      >
        {children}
      </motion.div>
    </div>
  );
}
