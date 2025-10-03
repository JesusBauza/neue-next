"use client";

import { useTransition } from "@/context/TransitionContext";

// 1. Acepta "onClick" como una prop
export default function TransitionLink({ href, children, onClick, ...props }) {
  const { handleTransition } = useTransition();

  const handleClick = (e) => {
    e.preventDefault(); // Previene la navegación normal

    // 2. Si se pasó una función onClick, ejecútala primero
    if (onClick) {
      onClick();
    }

    // 3. Luego, ejecuta la lógica de la transición
    handleTransition(href);
  };

  return (
    // Usamos una etiqueta <a> para tener control total del evento click
    <a href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
