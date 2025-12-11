import type { Work } from "../../data/works";

interface WorkCardProps {
  work: Work;
  onSelect: (work: Work) => void;
}

export function WorkCard({ work, onSelect }: WorkCardProps) {
  return (
    <div
      className="card bg-base-200 shadow-xl cursor-pointer transition-transform hover:scale-105"
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
      <figure className="px-4 pt-4">
        <div className="w-full h-48 bg-base-300 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={work.thumbnail}
            alt={work.title}
            className="object-cover w-full h-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = `<span class="text-base-content/50 text-sm">No Image</span>`;
            }}
          />
        </div>
      </figure>
      <div className="card-body">
        <h3 className="card-title">{work.title}</h3>
        <p className="text-base-content/70 line-clamp-2">{work.description}</p>
      </div>
    </div>
  );
}
