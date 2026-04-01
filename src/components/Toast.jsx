export default function Toast({ message, visible }) {
  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
      `}
    >
      <div className="bg-cyan-900/90 border border-cyan-500/50 text-cyan-50 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 font-medium backdrop-blur-sm">
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        {message}
      </div>
    </div>
  );
}
