import { useState } from "react";
import { works, type Work } from "../../data/works";
import { WorkCard } from "./WorkCard";
import { WorkModal } from "./WorkModal";

export function WorksSection() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Works</h2>
        <div className="flex flex-col gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} onSelect={setSelectedWork} />
          ))}
        </div>
      </div>
      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
}
