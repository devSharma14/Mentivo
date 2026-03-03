import CoreButton from "@/components/ui/CoreButton";
import PhoneMockup from "@/components/ui/PhoneMockup";
import HowItWorks from "./HowItWorks";
import CTABanner from "./CTABanner";

export default function Hero() {
    return (
        <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">

            {/* 2 Column Layout */}
            <div className="grid md:grid-cols-2 items-center gap-12">

                {/* LEFT SIDE */}
                <div>

                    {/* Badge */}
                    <div className="mb-6">
                        <span className="text-[10px] md:text-xs tracking-wider uppercase bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-neutral-300">
                            1:1 Mentorship Platform
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                        <span className="block text-white">Learn from</span>
                        <span className="block text-white">people a few steps ahead</span>
                        {/* <span className="block text-neutral-400">a few steps ahead</span> */}
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-neutral-400 max-w-xl text-base md:text-lg leading-relaxed">
                        Skip the guesswork. Connect with someone who's been
                        exactly where you are — and knows what it actually
                        takes to move forward.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <CoreButton size="lg" className="cursor-pointer">
                            Find a Mentor →
                        </CoreButton>

                        <CoreButton variant="secondary" size="lg" className="cursor-pointer">
                            Become a Mentor
                        </CoreButton>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center md:justify-end">

                    {/* Blue-Violet Glow */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] 
                  bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 
                  opacity-30 blur-[120px] rounded-full pointer-events-none" />

                    <PhoneMockup />

                </div>

            </div>
            <HowItWorks />
            <CTABanner />
        </section>
        
    );
}