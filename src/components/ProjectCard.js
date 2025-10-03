"use client";
import { useState } from "react"; // 1. Importa useState
import Image from "next/image";
import RevealAnimation from "./RevealAnimation";
import RollingTextLink from "./RollingTextLink";
import TransitionLink from "./TransitionLink";
import SimpleParallax from "simple-parallax-js";
import { delay, scale } from "framer-motion";

export default function ProjectCard({ project, index, variant = "default" }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!project) return null;

  // 2. Crea un estado para saber si la tarjeta está en hover

  const titleClass =
    variant === "compact"
      ? " text-black text-[1rem] font-bold  uppercase "
      : "text-black text-xs font-bold uppercase leading-none";
  const categoryClass =
    variant === "compact"
      ? " text-black text-[1rem] font-bold  uppercase"
      : "text-right text-black text-xs font-bold uppercase leading-none";
  const imageClass =
    variant === "compact"
      ? "self-stretch h-64 object-cover"
      : "h-[55vh] sm:h-[377px]  object-cover transition-transform duration-500 ease-in-out";

  const divClass =
    variant === "compact"
      ? "mt-1 flex justify-between items-center w-full "
      : "mt-4 flex justify-between items-center w-full";
  const wCard = variant === "compact" ? "lg:w-[28.31rem]" : "sm:w-[296px]";
  return (
    // 3. Añade los eventos onMouseEnter y onMouseLeave a la tarjeta principal
    <TransitionLink
      href={`/proyecto/${project.slug}`}
      className={`group block w-full ${wCard}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RevealAnimation delay={index * 0.1}>
        <div className="overflow-hidden will-change-transform">
          <SimpleParallax
            scale={1.2}
            delay={1}
            transition="cubic-bezier(0,0,0,1)"
          >
            <Image
              src={project.home_cover}
              alt={`Imagen de portada del proyecto ${project.title}`}
              width={800}
              height={600}
              className={imageClass}
            />
          </SimpleParallax>
        </div>

        <div className={divClass}>
          <div className="flex items-center justify-between w-full">
            <h3 className={titleClass}>{project.title}</h3>
            <RollingTextLink
              href={`/proyecto/${project.slug}`}
              text={project.category[0]}
              hoverText="View Details"
              isTransitionLink={false}
              className={categoryClass}
              // 4. Pasa el estado de hover al componente hijo
              isCardHovered={isHovered}
            />
          </div>
        </div>
      </RevealAnimation>
    </TransitionLink>
  );
}
