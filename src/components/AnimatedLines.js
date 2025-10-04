"use client";
import { motion } from "framer-motion";
import { useTransition } from "@/context/TransitionContext";

// Variantes para el contenedor principal, que orquesta la animación
const containerVariants = {
  hidden: {
    // No necesita propiedades, solo define el estado
  },
  visible: {
    transition: {
      staggerChildren: 0.1, // Retraso de 0.1s entre la animación de cada línea
      delayChildren: 0.2, // Retraso de 0.2s antes de que la primera línea comience
    },
  },
};

// Variantes para cada línea de texto individual
const lineVariants = {
  hidden: { y: "110%" }, // Empieza 110% abajo (fuera de la máscara)
  visible: {
    y: "0%", // Termina en su posición original
    transition: { duration: 0.8, ease: [0.2, 0.6, 0.2, 1] }, // Curva de easing suave
  },
};

export default function AnimatedLines({ text, className }) {
  const { isTransitioning } = useTransition();

  // Si el texto no existe, no renderiza nada para evitar errores
  if (!text) return null;

  // Separa el texto en un array de líneas usando el salto de línea (\n)
  const lines = text.split("\n");

  return (
    // Contenedor principal que controla la secuencia
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      // La animación solo se activa cuando la transición de página ha terminado
      animate={isTransitioning ? "hidden" : "visible"}
    >
      {lines.map((line, index) => (
        // El div exterior actúa como la "máscara" para cada línea
        <div key={index} className="overflow-hidden">
          {/* El span interior es el que se anima y se mueve */}
          <motion.span className="block" variants={lineVariants}>
            {line}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
