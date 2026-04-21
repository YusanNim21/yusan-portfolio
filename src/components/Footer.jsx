export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-neutral-900 text-center relative z-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-2">
        <p className="text-neutral-500 text-sm font-mono tracking-wide">
          Designed & Built by <span className="text-blue-400 font-semibold">Yusan Nuwarawewa</span>
        </p>
        
        <p className="text-neutral-600 text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>

        <p className="text-neutral-700 text-[10px] mt-1 uppercase tracking-widest font-mono">
          Powered by React • Tailwind • Framer Motion
        </p>
      </div>
    </footer>
  );
}