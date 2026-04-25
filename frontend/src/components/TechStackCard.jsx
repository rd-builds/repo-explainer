export default function TechStackCard({ techStack }) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="glass-card-sm p-6">
      <h3 className="text-xs font-medium tracking-[0.05em] uppercase text-[#908fa0] mb-4">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-sm font-medium text-[#c7c4d7]
                       hover:bg-white/8 hover:border-white/12 transition-all cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
