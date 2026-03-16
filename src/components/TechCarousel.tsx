const technologies = [
  "HTML",
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Java",
  "Node.js",
  "Tailwind",
  "Vite",
  "GitHub",
  "Java",
  "Laravel",
  "MySQL",
];

const loopedTechnologies = [...technologies, ...technologies];

function TechCarousel() {
  return (
    <div
      className="mb-10 mx-auto w-full max-w-[54rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Tecnologias que uso"
    >
      <div className="flex w-max gap-3 animate-[tech-scroll_24s_linear_infinite]">
        {loopedTechnologies.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900/75 px-4 py-[0.55rem] text-sm tracking-[0.02em] text-zinc-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;
