import { NavLink } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/repositories', label: 'Repositories' },
  { to: '/insights', label: 'Insights' },
  { to: '/team', label: 'Team' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Left — Brand + Nav */}
        <div className="flex items-center gap-10">
          <span className="text-lg font-bold gradient-text tracking-tight select-none">
            GitPulse AI
          </span>

          <ul className="hidden sm:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive
                        ? 'text-white'
                        : 'text-[#908fa0] hover:text-[#c7c4d7]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] gradient-primary rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden md:inline-block text-sm text-[#908fa0] hover:text-[#e5e2e1] transition-colors mr-4"
          >
            Documentation
          </a>
          <button className="p-2 rounded-lg text-[#908fa0] hover:text-[#e5e2e1] hover:bg-white/5 transition-all">
            <Bell size={18} />
          </button>
          <button className="p-2 rounded-lg text-[#908fa0] hover:text-[#e5e2e1] hover:bg-white/5 transition-all">
            <Settings size={18} />
          </button>
          <button className="ml-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-semibold">
            V
          </button>
        </div>
      </div>
    </nav>
  );
}
