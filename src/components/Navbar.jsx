import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim().padStart(2, '0'));
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-xl font-bold font-mono text-cyan-400">&gt;_ Learn Git</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#git-basics" onClick={(e) => scrollToSection(e, 'git-basics')} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors text-sm font-medium">Git Basics</a>
              <a href="#github-flow" onClick={(e) => scrollToSection(e, 'github-flow')} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors text-sm font-medium">GitHub Flow</a>
              <a href="#ssh-setup" onClick={(e) => scrollToSection(e, 'ssh-setup')} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors text-sm font-medium">SSH Setup</a>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to cmd # (e.g. 05)" 
                className="bg-[#111] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-3 md:pl-10 p-2 py-1.5 outline-none transition-all placeholder-gray-500 w-32 md:w-56"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none hidden md:flex">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
