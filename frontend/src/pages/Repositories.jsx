import { FolderGit2, Search } from 'lucide-react';

export default function Repositories() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            Repositories
          </h1>
          <p className="text-[#908fa0] text-[15px]">
            Browse and manage your analyzed repositories.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/3 border border-white/8">
            <Search size={16} className="text-[#908fa0]" />
            <input
              type="text"
              placeholder="Search repos…"
              className="bg-transparent outline-none text-sm text-[#e5e2e1] placeholder:text-[#5a5969] w-48"
            />
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div className="glass-card p-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-6">
          <FolderGit2 size={28} className="text-[#908fa0]" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">No repositories yet</h3>
        <p className="text-sm text-[#908fa0] max-w-sm">
          Head to the Dashboard and analyze a GitHub repository. It will appear here for
          quick reference.
        </p>
      </div>
    </main>
  );
}
