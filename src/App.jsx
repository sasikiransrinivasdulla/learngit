import { useState } from 'react';
import Navbar from './components/Navbar';
import CommandCard from './components/CommandCard';
import Toast from './components/Toast';
import { gitBasics, gitHubFlow, sshSetup } from './data/commands';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [highlightedCmd, setHighlightedCmd] = useState(null);

  const handleCopy = (msg = "Copied to clipboard!") => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const handleSearch = (cmdNumber) => {
    const el = document.getElementById(`cmd-${cmdNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedCmd(cmdNumber);
      setTimeout(() => setHighlightedCmd(null), 3000);
    } else {
      handleCopy(`Command #${cmdNumber} not found`);
    }
  };

  const renderSection = (id, title, commands) => (
    <section id={id} className="pt-24 pb-12">
      <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
      </h2>

      {id === 'github-flow' && (
        <div className="mb-8 p-4 bg-gray-900/40 border border-gray-800 rounded-xl text-cyan-300 text-sm flex items-start sm:items-center gap-3">
          <span className="text-xl shrink-0">💡</span>
          <p className="font-mono leading-relaxed text-gray-300">
            Push your branch → Open Pull Request on GitHub → Review → Merge
          </p>
        </div>
      )}

      <div className="space-y-6">
        {commands.map(cmd => (
          <CommandCard 
            key={cmd.id} 
            commandData={cmd} 
            onCopy={() => handleCopy()} 
            isHighlighted={highlightedCmd === cmd.number}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 pb-20">
      <Navbar onSearch={handleSearch} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Header / Hero */}
        <div className="mb-16 text-center md:text-left pt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
            Learn Git
          </h1>
        </div>

        {renderSection('git-basics', 'Git Basics', gitBasics)}
        {renderSection('github-flow', 'GitHub Flow', gitHubFlow)}
        {renderSection('ssh-setup', 'SSH Setup', sshSetup)}

      </main>

      <footer className="border-t border-gray-900 bg-[#050505] mt-20 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono">
            Open Source • No rights reserved • Sasi Kiran Srinivas
          </p>
          <a href="https://github.com/sasikiransrinivasdulla/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
        </div>
      </footer>

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

export default App;
