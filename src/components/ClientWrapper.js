"use client";

import { useTransition } from "@/context/TransitionContext";

import { motion, AnimatePresence } from "framer-motion";

export default function ClientWrapper({ children }) {
  const { isTransitioning } = useTransition();

  return (
    <div>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* 1. EFECTO DE OSCURECIMIENTO */}

            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* 2. CORTINILLA PRINCIPAL */}

            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-white z-[100]"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%", transition: { duration: 0 } }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
