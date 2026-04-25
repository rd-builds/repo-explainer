import { BarChart3 } from 'lucide-react';

export default function Insights() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Insights</h1>
        <p className="text-[#908fa0] text-[15px]">
          Aggregated analytics across all analyzed repositories.
        </p>
      </div>

      <div className="glass-card p-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-6">
          <BarChart3 size={28} className="text-[#908fa0]" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Insights coming soon</h3>
        <p className="text-sm text-[#908fa0] max-w-sm">
          Once you've analyzed a few repositories, trends, patterns, and comparative
          insights will populate here.
        </p>
      </div>
    </main>
  );
}
