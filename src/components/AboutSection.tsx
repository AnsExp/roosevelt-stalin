import { Code2, Database, Monitor, Terminal } from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  {
    title: "Frontend",
    description: "React, Next.js, Tailwind, TS",
    icon: Monitor,
    accentClass: "hover:border-violet-500/50 hover:bg-violet-500/5",
  },
  {
    title: "Backend",
    description: "Node.js, Express, SQL",
    icon: Database,
    accentClass: "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5",
  },
  {
    title: "Arquitectura",
    description: "Clean Code, Patrones, Testing",
    icon: Code2,
    accentClass: "hover:border-orange-500/50 hover:bg-orange-500/5",
  },
  {
    title: "Herramientas",
    description: "Git, Docker, Figma, Vercel",
    icon: Terminal,
    accentClass: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
  },
];

function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-zinc-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              Sobre Mi <span className="h-px bg-zinc-800 flex-1 ml-4 hidden sm:block" />
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                Soy un profesional apasionado por crear soluciones simples y efectivas, siempre buscando claridad y funcionalidad en cada proyecto. Me inspira el diseño minimalista, donde la estética se une con la usabilidad para transmitir ideas de manera directa y elegante. Además, disfruto trabajar con tecnologías modernas, explorando herramientas y metodologías que permitan construir sistemas escalables, innovadores y adaptados a las necesidades actuales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                accentClass={skill.accentClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
