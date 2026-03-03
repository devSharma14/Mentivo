// CTABanner.tsx
import React from "react";
import CoreButton from "../ui/CoreButton";

export default function CTABanner() {
  return (
    <section className="w-full flex justify-center px-4">
      <div
        className="
          relative
          w-full max-w-6xl
          rounded-3xl
          px-6 py-10 md:px-12 md:py-14
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-8
          bg-gradient-to-r
          from-[#0F1115]
          via-[#0F1115]
          to-[#2A2107]
          border border-white/5
          overflow-hidden
        "
      >
        {/* ✨ Premium top glow line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-white text-2xl md:text-5xl font-semibold leading-tight">
            Ready to stop guessing?
          </h2>

          <p className="mt-5 text-white/60 text-sm md:text-base">
            One honest 30-minute conversation can save you months of wrong turns.
          </p>
        </div>

        {/* CTA Button */}
        <CoreButton size="lg" className="shrink-0">
          Browse Mentors →
        </CoreButton>
      </div>
    </section>
  );
}