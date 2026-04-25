import { AlertCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import InputBar from '../components/InputBar';
import SummaryCard from '../components/SummaryCard';
import ExplanationCard from '../components/ExplanationCard';
import TechStackCard from '../components/TechStackCard';
import LearningCard from '../components/LearningCard';
import AlertsCard from '../components/AlertsCard';
import StatsCard from '../components/StatsCard';
import useRepoAnalysis from '../hooks/useRepoAnalysis';

/* ── Skeleton loaders ── */
function SkeletonBlock({ className = '' }) {
  return <div className={`shimmer-skeleton rounded-xl ${className}`} />;
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
      <div className="space-y-6">
        <SkeletonBlock className="h-48" />
        <SkeletonBlock className="h-72" />
      </div>
      <div className="space-y-6">
        <SkeletonBlock className="h-36" />
        <SkeletonBlock className="h-44" />
        <SkeletonBlock className="h-32" />
        <div className="grid grid-cols-2 gap-3">
          <SkeletonBlock className="h-24" />
          <SkeletonBlock className="h-24" />
          <SkeletonBlock className="h-24" />
          <SkeletonBlock className="h-24" />
        </div>
      </div>
    </div>
  );
}

/* ── Error banner ── */
function ErrorBanner({ message, onDismiss }) {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/8 border border-red-500/20">
        <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-red-300 font-medium mb-1">Analysis Failed</p>
          <p className="text-sm text-[#908fa0]">{message}</p>
        </div>
        <button
          onClick={onDismiss}
          className="text-[#908fa0] hover:text-white text-sm transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

/* ── Dashboard page ── */
export default function Dashboard() {
  const { data, loading, error, analyze, reset } = useRepoAnalysis();

  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-8">
      <Hero />
      <InputBar onAnalyze={analyze} loading={loading} />

      {error && <ErrorBanner message={error} onDismiss={reset} />}

      {loading && <LoadingSkeleton />}

      {data && !loading && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 animate-in">
          {/* Left column — main content */}
          <div className="space-y-6">
            <SummaryCard summary={data.summary} />
            <ExplanationCard explanation={data.explanation} />
          </div>

          {/* Right column — sidebar cards */}
          <div className="space-y-6">
            <LearningCard beginnerLevel={data.beginnerLevel} />
            <TechStackCard techStack={data.techStack} />
            <AlertsCard warnings={data.warnings} />
            <StatsCard stats={data.stats} />
          </div>
        </div>
      )}

      {/* Visualize the Flow — CTA */}
      {data && !loading && (
        <section className="mt-16 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a2e] to-[#050505]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="relative p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Visualize the Flow
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#818cf8] font-medium transition-colors"
            >
              Generate Dependency Graph <ArrowRight size={18} />
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
