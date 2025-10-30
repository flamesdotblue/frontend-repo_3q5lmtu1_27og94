import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DeveloperMode from './components/DeveloperMode';
import UserMode from './components/UserMode';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-teal-50 text-slate-800">
      <Header onNavigate={setPage} current={page} />

      {page === 'home' && (
        <Hero onSelect={(mode) => setPage(mode)} />
      )}

      {page === 'developer' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <DeveloperMode />
        </main>
      )}

      {page === 'user' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <UserMode />
        </main>
      )}

      <footer className="mt-12 py-8 text-center text-sm text-slate-500">
        Built with accessibility-first design. AI For All © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
