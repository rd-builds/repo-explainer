import { Users } from 'lucide-react';

export default function Team() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Team</h1>
        <p className="text-[#908fa0] text-[15px]">
          Invite collaborators and manage team access.
        </p>
      </div>

      <div className="glass-card p-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-6">
          <Users size={28} className="text-[#908fa0]" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Team workspace</h3>
        <p className="text-sm text-[#908fa0] max-w-sm">
          Collaborate with your team by sharing analyzed repositories and insights.
          Team features are coming soon.
        </p>
      </div>
    </main>
  );
}
