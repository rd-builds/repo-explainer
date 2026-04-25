import { AlertTriangle, AlertCircle } from 'lucide-react';

export default function AlertsCard({ warnings }) {
  if (!warnings || warnings.length === 0) return null;

  return (
    <div className="glass-card-sm p-6">
      <h3 className="text-xs font-medium tracking-[0.05em] uppercase text-[#908fa0] mb-4">
        System Alerts
      </h3>
      <div className="space-y-3">
        {warnings.map((warning, i) => {
          const isError = warning.severity === 'error' || warning.type === 'error';
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-3 rounded-xl border ${
                isError
                  ? 'bg-red-500/5 border-red-500/20'
                  : 'bg-yellow-500/5 border-yellow-500/20'
              }`}
            >
              {isError ? (
                <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
              ) : (
                <AlertTriangle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
              )}
              <span className="text-sm text-[#c7c4d7] leading-relaxed">
                {warning.message || warning}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
