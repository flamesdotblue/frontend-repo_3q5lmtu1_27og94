import { Code2, Eye, Home } from 'lucide-react';

export default function Header({ onNavigate, current }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 via-teal-400 to-blue-500 shadow-sm" />
          <div className="leading-tight">
            <p className="font-semibold text-slate-800 tracking-tight">AI For All</p>
            <p className="text-xs text-slate-500 -mt-0.5">Inclusive by Design</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              current === 'home'
                ? 'bg-sky-100 text-sky-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
            aria-label="Go to Home"
          >
            <Home className="h-4 w-4" /> Home
          </button>
          <button
            onClick={() => onNavigate('developer')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              current === 'developer'
                ? 'bg-sky-100 text-sky-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
            aria-label="Go to Developer Mode"
          >
            <Code2 className="h-4 w-4" /> Developer
          </button>
          <button
            onClick={() => onNavigate('user')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              current === 'user'
                ? 'bg-sky-100 text-sky-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
            aria-label="Go to User Mode"
          >
            <Eye className="h-4 w-4" /> User
          </button>
        </nav>
      </div>
    </header>
  );
}
