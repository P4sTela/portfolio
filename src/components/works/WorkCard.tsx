import type { Work } from "../../data/works";

interface WorkCardProps {
  work: Work;
  onSelect: (work: Work) => void;
  showTechStack?: boolean;
}

export function WorkCard({
  work,
  onSelect,
  showTechStack = true,
}: WorkCardProps) {
  return (
    <div
      className="card card-side bg-base-200 shadow-xl cursor-pointer transition-transform hover:scale-[1.02] flex-row"
      onClick={() => onSelect(work)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(work);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${work.title}の詳細を表示`}
    >
      <figure className="w-40 sm:w-48 md:w-56 shrink-0">
        <div className="w-full aspect-4/3 bg-base-300 flex items-center justify-center overflow-hidden">
          {work.thumbnail && (
            <img
              src={work.thumbnail.src}
              alt={work.title}
              className="object-cover object-top w-full h-full"
            />
          )}
          {!work.thumbnail && (
            <span className="text-base-content/50">No Image</span>
          )}
        </div>
      </figure>
      <div className="card-body py-4 px-4 sm:px-6">
        <h3 className="card-title text-lg sm:text-xl">{work.title}</h3>
        <p className="text-base-content/70 text-sm sm:text-base line-clamp-2">
          {work.description}
        </p>
        {showTechStack && work.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {work.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="badge badge-sm badge-outline">
                {tech}
              </span>
            ))}
            {work.techStack.length > 5 && (
              <span className="badge badge-sm badge-ghost">
                +{work.techStack.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
