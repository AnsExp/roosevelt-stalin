import logo from "../../public/logo.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8" />
          </div>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#sobre-mi" className="hover:text-white transition-colors">
            Sobre Mi
          </a>
          <a href="#proyectos" className="hover:text-white transition-colors">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
