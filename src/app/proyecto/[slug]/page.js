"use client";

import RevealAnimation from "@/components/RevealAnimation";
import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProjectCard from "@/components/ProjectCard";

// SVG para el botón de cerrar (X)
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG para la flecha de "Siguiente"
const NextIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18l6-6-6-6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG para la flecha de "Anterior"
const PrevIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  if (!project) {
    notFound();
  }

  const slides = project.gallery.map((image) => ({ src: image.url }));

  return (
    <main className="pl-[18px] lg:pb-[20px] pr-[16px]">
      <section className="flex flex-col xl:flex-row xl:gap-[143px] mt-[10.06rem] md:mt-[23.25rem] xl:mb-[64px]">
        <RevealAnimation delay={0.1} className="flex items-end overflow-hidden">
          <h1 className="w-72 sm:w-[750px] justify-start tracking-[-0.06rem] md:tracking-[-0.2rem] text-black text-[42px] sm:text-[4.5rem] md:text-[7.5rem] font-medium  uppercase leading-[40.25px] sm:leading-15 md:leading-[118px] whitespace-pre-line">
            {project.title}
          </h1>
        </RevealAnimation>
        <div className="mt-[52px] mb-[20px] flex flex-row   justify-between lg:gap-[111px] text-black text-[10.5px] md:text-[1rem] font-bold  uppercase leading-none">
          <ul className="flex flex-col justify-end">
            {project.category.map((cat, index) => (
              <li key={index}>
                <RevealAnimation delay={index * 0.1}>
                  <span>{cat}</span>
                </RevealAnimation>
              </li>
            ))}
          </ul>
          <RevealAnimation
            delay={0.1}
            className="flex items-end overflow-hidden"
          >
            <span>{project.year}</span>
          </RevealAnimation>
        </div>
      </section>
      <RevealAnimation delay={0.2}>
        <SimpleParallax scale={1.1}>
          <Image
            src={project.project_cover}
            alt={`Imagen principal del proyecto ${project.title}`}
            width={1920}
            height={1080}
            className=" object-cover h-80 lg:h-[520px]"
          />
        </SimpleParallax>
      </RevealAnimation>
      <section className=" mt-[80px] lg:mt-[64px] lg:flex lg:flex-row lg:justify-between">
        <h3 className="mb-[32px] self-stretch justify-start text-black text-[1.6rem] font-bold uppercase ">
          Project Info
        </h3>
        <div className="md:w-[43.12rem] flex flex-col md:flex-row gap-[64px] lg:gap-[1.25rem] justify-start text-black text-[1.2rem] font-bold leading-[1.4rem]">
          <p>{project.info1}</p>
          <p>{project.info2}</p>
        </div>
      </section>
      <section className="flex flex-row gap-[61px] mt-[153px] lg:mt-[15rem] lg:justify-between">
        <h3 className="text-black text-[1.6rem] font-bold uppercase leading-none">
          Credits
        </h3>
        <div className="flex flex-col gap-[1rem]">
          {project.credits.map((credit, index) => (
            // 2. Creamos un div para cada crédito con una key única
            <div key={index} className="flex flex-col lg:w-[43.12rem] ">
              {/* 3. Mostramos el nombre y el rol de cada crédito */}
              <span className="self-stretch justify-start text-black text-[1.2rem] font-medium  leading-none">
                {credit.name}
              </span>
              <span className="self-stretch justify-start text-neutral-400 text-[1.2rem] font-normal  leading-7">
                {credit.role}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[160px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.gallery.map((image, i) => {
            const gridSpan =
              image.type === "horizontal" ? "sm:col-span-2" : "col-span-1";

            const heightClass =
              image.type === "vertical"
                ? "sm:h-[50vh] lg:h-[47.81rem] lg:aspect-[232/255]"
                : "sm:h-[70vh] lg:h-[100%]";
            return (
              <div
                key={i}
                className={`${gridSpan} cursor-pointer`}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.url}
                  width={1920}
                  height={1080}
                  alt={project.title}
                  className={`w-full ${heightClass} object-cover`}
                />
              </div>
            );
          })}
        </div>

        {relatedProjects.length > 0 && (
          <div className="w-full mt-[129px] lg:mt-[13.19rem]">
            <h2 className="w-[100%] lg:w-full justify-start text-black text-6xl lg:text-9xl font-medium uppercase leading-[66px] lg:leading-[122px] mb-[39px]">
              Related Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-[32px]">
              {relatedProjects.map((relatedProject, index) => (
                <div
                  key={relatedProject.slug}
                  // Si el índice es 1 (el segundo elemento), aplica la clase de alineación
                  className={
                    index === 1
                      ? "md:justify-self-end"
                      : "md:justify-self-start"
                  }
                >
                  <ProjectCard
                    key={relatedProject.slug}
                    project={relatedProject}
                    index={index}
                    className="self-stretch h-64"
                    variant="compact"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          render={{
            iconPrev: PrevIcon,
            iconNext: NextIcon,
            iconClose: CloseIcon,
          }}
          toolbar={{ buttons: ["close"] }}
        />
      </section>
    </main>
  );
}
