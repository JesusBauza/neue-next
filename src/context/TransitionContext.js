"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    // Comprueba si la ruta ha cambiado realmente
    if (previousPathnameRef.current !== pathname) {
      // Si cambió, significa que la nueva página ha cargado.
      // Ahora es seguro terminar la transición.
      setIsTransitioning(false);
    }
    // Actualiza la referencia con la ruta actual para la próxima comparación
    previousPathnameRef.current = pathname;
  }, [pathname]);

  const handleTransition = async (href) => {
    // No hacer nada si ya estamos en una transición o es la misma página
    if (isTransitioning || pathname === href) return;

    // 1. Inicia la transición (la cortina empieza a subir)
    setIsTransitioning(true);

    // 2. Espera a que la animación de salida se complete
    await new Promise((r) => setTimeout(r, 800));

    // 3. Navega a la nueva página.
    //    El useEffect de arriba se encargará de poner isTransitioning en false
    //    cuando la navegación termine.
    router.push(href);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, handleTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
