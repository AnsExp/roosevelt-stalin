import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
};

function SkillCard({ title, description, icon: Icon, accentClass }: SkillCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 transition-all group cursor-default ${accentClass}`}
    >
      <Icon className="mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all" size={32} />
      <h3 className="font-semibold text-lg mb-2 text-zinc-200">{title}</h3>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  );
}

export default SkillCard;
