"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyStyler() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Las clases que queremos aplicar solo en la página "About"
    const htmlClasses = ["h-full"];
    const classesToAdd = ["grid", "grid-rows-[auto_1fr]", "h-full"];

    if (isAboutPage) {
      // Si estamos en "About", añade las clases
      html.classList.add(...htmlClasses);
      body.classList.add(...classesToAdd);
    }

    // Esta es la función de "limpieza" del efecto.
    // Se ejecuta cuando navegas a OTRA página.
    return () => {
      if (isAboutPage) {
        // Al salir de "About", elimina las clases para que las otras páginas funcionen normal.
        html.classList.remove(...classesToAdd);
        body.classList.remove(...classesToAdd);
      }
    };
  }, [isAboutPage]); // El efecto se vuelve a ejecutar solo si "isAboutPage" cambia

  // Este componente no renderiza nada visible
  return null;
}
