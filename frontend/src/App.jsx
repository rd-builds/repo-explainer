import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Repositories from './pages/Repositories';
import Insights from './pages/Insights';
import Team from './pages/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20">
        <div className="max-w-[1200px] mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-[0.05em] uppercase text-[#908fa0]">
            &copy; 2024 GitPulse AI. Engineered for Digital Quietude.
          </p>
          <div className="flex items-center gap-6 text-xs tracking-[0.05em] uppercase text-[#908fa0]">
            <a href="#" className="hover:text-[#e5e2e1] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e5e2e1] transition-colors">Terms of Service</a>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Security Status
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
