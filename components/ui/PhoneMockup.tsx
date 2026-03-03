import React from "react";

export default function PhoneMockup() {
  return (
    <div className="relative w-[320px] h-[640px] rounded-[48px] bg-[#0f0f12] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-white/10">

      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20" />

      {/* Screen */}
      <div className="w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-b from-[#0d0d10] to-black text-white px-5 pt-7 pb-6 flex flex-col">

        {/* App Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold tracking-tight">
            mentivo.
          </h2>
          <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-xs text-neutral-400">
            ⌕
          </div>
        </div>

        {/* Label */}
        <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 mb-4">
          Featured Mentor
        </p>
        
        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 backdrop-blur">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#F5B301] text-black font-semibold flex items-center justify-center text-sm">
              PM
            </div>
            <div>
              <p className="text-sm font-semibold">Priya Mehta</p>
              <p className="text-xs text-neutral-400">DSA · Google SWE</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">LeetCode</span>
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">CP</span>
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">Arrays</span>
          </div>

          <p className="text-[11px] text-neutral-400 mb-3">
            4.8 ⭐ · 52 sessions
          </p>

          <button className="w-full bg-[#F5B301] text-black text-xs font-semibold py-2.5 rounded-xl hover:opacity-90 transition">
            Request Session →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#F5B301] text-black font-semibold flex items-center justify-center text-sm">
              RV
            </div>
            <div>
              <p className="text-sm font-semibold">Rohan Verma</p>
              <p className="text-xs text-neutral-400">Product · Ex-Flipkart</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">GTM</span>
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">Roadmaps</span>
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">PMF</span>
          </div>

          <p className="text-[11px] text-neutral-400 mb-3">
            5.0 ⭐ · 21 sessions
          </p>

          <button className="w-full bg-[#F5B301] text-black text-xs font-semibold py-2.5 rounded-xl hover:opacity-90 transition">
            Request Session →
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-5 text-center">
          <p className="text-[11px] text-neutral-500 mb-3">
            Free • 20–30 min sessions
          </p>

          <div className="flex justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B301]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
        </div>

      </div>
    </div>
  );
}