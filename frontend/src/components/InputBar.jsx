import { useState } from 'react';
import { Link2, Loader2 } from 'lucide-react';

export default function InputBar({ onAnalyze, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() && !loading) {
      onAnalyze(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-14">
      <div className="gradient-border glass-card flex items-center gap-3 pl-5 pr-2 py-2">
        <Link2 size={20} className="text-[#908fa0] shrink-0" />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://github.com/username/repository"
          className="flex-1 bg-transparent outline-none text-[15px] text-[#e5e2e1] placeholder:text-[#5a5969] font-inter"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="gradient-primary px-6 py-3 rounded-xl text-white text-sm font-semibold
                     transition-all hover:opacity-90 active:scale-[0.97]
                     disabled:opacity-40 disabled:cursor-not-allowed
                     flex items-center gap-2 shrink-0"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Analyzing…
            </>
          ) : (
            'Analyze Repo'
          )}
        </button>
      </div>
    </form>
  );
}
