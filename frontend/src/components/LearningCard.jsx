const levelConfig = {
  1: { label: 'Beginner', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  2: { label: 'Easy', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  3: { label: 'Intermediate', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  4: { label: 'Advanced', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  5: { label: 'Expert', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

export default function LearningCard({ beginnerLevel }) {
  if (!beginnerLevel) return null;

  const level = beginnerLevel.level || 3;
  const description = beginnerLevel.description || '';
  const config = levelConfig[level] || levelConfig[3];

  return (
    <div className="glass-card-sm p-6">
      <h3 className="text-xs font-medium tracking-[0.05em] uppercase text-[#908fa0] mb-4">
        Learning Curve
      </h3>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-semibold text-white">{config.label}</span>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${config.color}`}
        >
          LEVEL {level}/5
        </span>
      </div>
      {description && (
        <p className="text-sm text-[#908fa0] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
