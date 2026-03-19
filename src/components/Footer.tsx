import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800 text-center flex flex-col items-center bg-zinc-950">
      <div className="flex gap-6 mb-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AnsExp"
          className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
        >
          <Github size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/roosevelt-stalin/"
          className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all"
        >
          <Linkedin size={20} />
        </a>
      </div>
      <p className="text-zinc-500 text-sm">{`© ${new Date().getFullYear()} Roosevelt Stalin.`}</p>
    </footer>
  );
}

export default Footer;
