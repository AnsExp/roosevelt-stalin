import { ChevronDown } from "lucide-react";
import TechCarousel from "./TechCarousel";

function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-8 border border-violet-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          Disponible para trabajar
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400">
            Roosevelt Stalin
          </span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed text-center">
          Desarrollador Fullstack
        </p>

        <TechCarousel />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a
            href="#proyectos"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Contactar
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce text-zinc-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

export default HeroSection;
