import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

type ProjectLink = {
  label: string;
  url: string;
  icon: LucideIcon;
};

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  accentClass: string;
  imageUrl?: string;
  links?: ProjectLink[];
};

const DESCRIPTION_COLLAPSE_THRESHOLD = 110;
const MODAL_CLOSE_ANIMATION_MS = 220;

function ProjectCard({ title, description, tags, accentClass, imageUrl, links }: ProjectCardProps) {
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const canToggleDescription = description.length > DESCRIPTION_COLLAPSE_THRESHOLD;

  const openModal = () => {
    setIsModalMounted(true);

    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!isModalMounted) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [isModalMounted]);

  useEffect(() => {
    if (isModalVisible || !isModalMounted) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsModalMounted(false);
    }, MODAL_CLOSE_ANIMATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isModalVisible, isModalMounted]);

  return (
    <>
      <div className="group rounded-3xl bg-zinc-900/50 border border-zinc-800/80 overflow-hidden hover:border-zinc-700 transition-all hover:-translate-y-2 flex flex-col">
        <div className="h-48 bg-zinc-800/50 flex flex-col justify-end relative overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="h-full w-full object-cover grayscale-75 group-hover:grayscale-0 transition-all duration-200" />
          ) : (
            <>
              <div className={`absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity ${accentClass}`} />
              <div className="absolute inset-x-4 bottom-0 h-32 bg-zinc-950/50 rounded-t-xl border-t border-x border-zinc-700/50 translate-y-4 group-hover:translate-y-2 transition-transform shadow-2xl" />
            </>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-zinc-100 transition-colors">{title}</h3>
          <p className={`text-zinc-400 text-sm leading-6 ${canToggleDescription ? "line-clamp-2" : "mb-6"}`}>
            {description}
          </p>
          {canToggleDescription && (
            <button
              type="button"
              onClick={openModal}
              className="self-start mt-2 mb-6 text-xs font-semibold tracking-wide uppercase text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Ver mas
            </button>
          )}
          {!canToggleDescription && <div className="mb-6" />}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
          {!!links?.length && (
            <div className="flex gap-4 pt-4 border-t border-zinc-800/80 mt-auto">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={`${title}-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Icon size={16} /> {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {isModalMounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-opacity duration-200 ${
            isModalVisible ? "bg-zinc-950/70 backdrop-blur-md opacity-100" : "bg-zinc-950/0 backdrop-blur-0 opacity-0"
          }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-modal-title-${title}`}
        >
          <div
            className={`w-full max-w-3xl rounded-3xl border border-zinc-800/80 bg-zinc-900/90 shadow-2xl overflow-hidden transition-all duration-200 ${
              isModalVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-3 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="h-56 bg-zinc-800/50 flex flex-col justify-end relative overflow-hidden">
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
              ) : (
                <>
                  <div className={`absolute inset-0 opacity-70 ${accentClass}`} />
                  <div className="absolute inset-x-6 bottom-0 h-36 bg-zinc-950/50 rounded-t-xl border-t border-x border-zinc-700/50" />
                </>
              )}
              <div className="absolute inset-x-6 bottom-6 flex items-start justify-between gap-4">
                <h4 id={`project-modal-title-${title}`} className="text-2xl font-bold text-zinc-50 drop-shadow-lg">
                  {title}
                </h4>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-md border border-zinc-700/80 bg-zinc-950/60 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-zinc-300">{description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span key={`${title}-modal-${tag}`} className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
              {!!links?.length && (
                <div className="flex flex-wrap gap-4 pt-5 mt-6 border-t border-zinc-800/80">
                  {links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={`${title}-modal-${link.label}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                      >
                        <Icon size={16} /> {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
