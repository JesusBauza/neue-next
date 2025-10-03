"use client";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";
import Link from "next/link";

export default function RollingTextLink({
  href,
  text,
  hoverText = text,
  onClick,
  isTransitionLink = true,
  className, // 1. Acepta la prop "className"
  isCardHovered,
  alignment = "justify-end",
}) {
  const slideVariants = {
    initial: { y: "0%" },
    hover: { y: "-50%" },
  };

  const addSpacing = text !== hoverText;
  const animationContent = (
    // 2. Quitamos la altura fija y usamos padding vertical (py-1)
    //    Esto se adapta a cualquier tamaño de fuente sin cortar las letras.
    <div className="relative overflow-hidden  h-[1.125em]">
      <motion.div
        className="flex flex-col text-right"
        variants={slideVariants}
        initial="initial"
        whileHover="hover"
        animate={isCardHovered ? "hover" : "initial"} // Anima según la prop
        transition={{ duration: 0.3, ease: "easeInOut" }}
        alignment="justify-end"
      >
        <span
          className={`block h-[1.2em] leading-tight flex ${alignment} ${
            addSpacing ? "pb-1" : ""
          }`}
        >
          {text}
        </span>
        <span
          className={`block h-[1.2em] leading-tight flex ${alignment} ${
            addSpacing ? "pt-0" : ""
          }`}
        >
          {hoverText}
        </span>
      </motion.div>
    </div>
  );

  if (isTransitionLink) {
    return (
      <TransitionLink
        href={href}
        onClick={onClick}
        // 3. Aplicamos la clase que nos pasen, junto a la nuestra
        className={`rolling-link-container ${className}`}
      >
        {animationContent}
      </TransitionLink>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rolling-link-container ${className}`}
    >
      {animationContent}
    </Link>
  );
}
