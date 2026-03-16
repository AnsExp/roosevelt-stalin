import { ExternalLink, Github } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sigelo",
    description: "Sistema de gestion de paquetería. El sistema se divide en dos partes: Frontend y Backend.",
    tags: ["React", "Tailwind", "Prisma", "SQLite"],
    accentClass: "bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20",
    imageUrl: "/resources/img/sigelo.png",
    links: [
      { label: "Codigo", url: "https://github.com/AnsExp", icon: Github },
    ]
  },
  {
    title: "Central Booking",
    description: "Plataforma de reservas para boletos de viaje en tren. Permite a los usuarios buscar, seleccionar y reservar boletos de manera eficiente.",
    tags: ["Laravel", "MySQL"],
    accentClass: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    imageUrl: "/resources/img/central-booking.png",
    links: [
      { label: "GitHub", url: "https://github.com/AnsExp/central-booking", icon: Github, },
      { label: "Sitio", url: "https://supgalapagos.tours/central", icon: ExternalLink, },
    ]
  },
  {
    title: "Document Vault API",
    description: "API para subir documentos y recuperarlos de forma segura, con endpoints para carga, listado, descarga y gestion de metadatos.",
    tags: ['Java', 'Spring'],
    accentClass: "bg-gradient-to-br from-sky-500/20 to-indigo-500/20",
    imageUrl: "/resources/img/document-vault-api.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnsExp/pdf_storage",
        icon: Github
      }
    ]
  },
  {
    title: "Notepad",
    description: "Aplicacion de bloc de notas con creacion, edicion, busqueda y organizacion de notas en tiempo real.",
    tags: ['Java', 'Java Swing'],
    accentClass: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    imageUrl: "/resources/img/notepad.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnsExp/Notepad",
        icon: Github
      }
    ]
  },
];

function ProjectsSection() {
  return (
    <section id="proyectos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed text-center">
            Una seleccion de mis trabajos recientes. Cada proyecto representa un
            desafio unico y una oportunidad para aprender algo nuevo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                accentClass={project.accentClass}
                imageUrl={project.imageUrl}
                links={project.links}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
