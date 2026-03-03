import React from "react";

export default function HowItWorks() {
  return (
    <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight text-white">
          Simple. Intentional.
        </h2>
        <p className="mt-3 md:mt-4 text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
          Three steps. No fluff. Just real conversations that move you forward.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">

        {/* Card 01 */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-8 backdrop-blur">
          <p className="text-xl md:text-2xl font-semibold text-[#F5B301] mb-4 md:mb-6">
            01
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
            Browse
          </h3>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Explore mentors who've been exactly where you are. Filter by what you actually need help with.
          </p>
        </div>

        {/* Card 02 */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-8 backdrop-blur">
          <p className="text-xl md:text-2xl font-semibold text-[#F5B301] mb-4 md:mb-6">
            02
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
            Request
          </h3>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Send a meeting request. Your mentor confirms a 20–30 min slot that works for both of you.
          </p>
        </div>

        {/* Card 03 */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-8 backdrop-blur">
          <p className="text-xl md:text-2xl font-semibold text-[#F5B301] mb-4 md:mb-6">
            03
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
            Grow
          </h3>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Show up, have an honest conversation, and leave with clarity you couldn't get anywhere else.
          </p>
        </div>

      </div>
    </section>
  );
}