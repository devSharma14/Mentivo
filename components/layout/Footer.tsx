// Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0B0D11]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="text-white font-semibold text-lg tracking-tight">
          mentivo<span className="text-blue-500">.</span>
        </div>

        {/* Center - Copyright */}
        <div className="absolute left-1/2 -translate-x-1/2 text-white/50 text-sm md:text-xl">
          © 2026 Mentivo. All rights reserved.
        </div>

      </div>
    </footer>
  );
}