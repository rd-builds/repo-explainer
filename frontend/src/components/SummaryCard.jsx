import { Sparkles } from 'lucide-react';

export default function SummaryCard({ summary }) {
  if (!summary) return null;

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </span>
        <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-white">
          Summary
        </h2>
      </div>
      <blockquote className="border-l-2 border-[#6366F1]/50 pl-5 text-[15px] leading-[1.6] text-[#c7c4d7]">
        {summary}
      </blockquote>
    </div>
  );
}
