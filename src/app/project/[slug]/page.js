import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import ProjectView from "@/components/ProjectView"; // 1. Importa el nuevo componente de cliente

// La función de metadatos se queda aquí, en el componente de servidor
export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.info ? project.info.substring(0, 150) : "",
  };
}

// 2. Este es ahora un Componente de Servidor
export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Lógica para encontrar trabajos relacionados
  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  // 3. Renderiza el componente de cliente y le pasa los datos
  return <ProjectView project={project} relatedProjects={relatedProjects} />;
}
