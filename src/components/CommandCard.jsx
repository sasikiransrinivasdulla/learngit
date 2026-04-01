import { useState } from 'react';

export default function CommandCard({ commandData, onCopy, isHighlighted }) {
  const { id, number, command, note, hint } = commandData;
  const [showNote, setShowNote] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    if (onCopy) onCopy();
  };

  return (
    <div 
      id={`cmd-${number}`}
      className={`group relative flex flex-col md:flex-row items-stretch md:items-center bg-[#111] border rounded-xl p-4 md:p-6 mb-4
        transition-all duration-300 ease-out 
        ${isHighlighted ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-gray-800 hover:border-[#444] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]'}
      `}>
      {/* Number */}
      <div className={`text-4xl md:text-5xl font-bold pr-4 md:w-24 mb-3 md:mb-0 select-none transition-colors ${isHighlighted ? 'text-cyan-500/70' : 'text-gray-700 group-hover:text-gray-500'}`}>
        {number}
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 pr-0 md:pr-4">
        <div className="bg-[#050505] border border-gray-900 rounded-lg p-3 font-mono text-sm sm:text-base text-cyan-400 overflow-x-auto whitespace-pre cursor-text">
          {command}
        </div>
        
        {/* Expandable Note */}
        <div 
          className="grid transition-all duration-300 ease-in-out" 
          style={{ gridTemplateRows: showNote ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="pt-3">
              <p className="text-gray-300 text-sm mb-1">{note}</p>
              {hint && <p className="text-cyan-300/80 text-xs italic mt-2">💡 {hint}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 md:mt-0 shrink-0 justify-end md:justify-start">
        <button 
          onClick={() => setShowNote(!showNote)}
          className="px-4 py-2 rounded-lg bg-[#222] text-gray-300 text-sm font-medium border border-transparent hover:border-gray-600 transition-colors"
        >
          {showNote ? 'Hide Notes' : 'Notes'}
        </button>
        <button 
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-cyan-900/20 text-cyan-400 border border-cyan-500/30 text-sm font-medium hover:bg-cyan-900/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all shrink-0 active:scale-95"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
