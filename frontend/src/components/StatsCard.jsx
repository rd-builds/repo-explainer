export default function StatsCard({ stats }) {
  if (!stats) return null;

  const items = [
    { label: 'Stars', value: stats.stars ?? '—' },
    { label: 'Forks', value: stats.forks ?? '—' },
    { label: 'Open PRs', value: stats.openPRs ?? '—' },
    { label: 'Uptime', value: stats.uptime ?? '—' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="glass-card-sm p-5 flex flex-col items-center justify-center text-center"
        >
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-[#908fa0] mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
