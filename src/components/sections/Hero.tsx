"use client";

import { MandalaPattern, GoldenParticles } from "@/components/IndianPatterns";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-16 overflow-hidden bg-white">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Light warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-light/30 via-transparent to-white/20 pointer-events-none z-[1]" />

            {/* Floating golden particles — diya embers */}
            <GoldenParticles />

            {/* Rotating mandala behind headlines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] text-saffron-gold/[0.06] animate-mandala-spin pointer-events-none z-[2]">
                <MandalaPattern className="w-full h-full" />
            </div>

            {/* Background Decorations */}
            <div className="absolute left-[8%] top-0 w-[1px] h-full bg-charcoal/[0.05] pointer-events-none z-10" />
            <div className="absolute right-[8%] top-0 w-[1px] h-full bg-charcoal/[0.05] pointer-events-none z-10" />

            {/* Main Content */}
            <div className="relative text-center max-w-5xl mx-auto z-10">
                {/* Hindi decorative text */}
                <p className="font-hindi text-saffron-gold/50 text-sm md:text-base tracking-wider mb-6">
                    अंतरिक्ष यात्रा
                </p>

                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-sans font-black leading-[0.85] tracking-[-0.05em] text-charcoal uppercase drop-shadow-sm">
                    India&apos;s
                </h1>
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-sans font-black leading-[0.85] tracking-[-0.05em] text-charcoal/25 uppercase drop-shadow-sm">
                    Frontier
                </h1>

                <p className="mt-16 text-sm text-charcoal/60 font-medium tracking-[0.5em] uppercase">
                    Next-Gen Orbital Launches from Bharat
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[1px] h-10 bg-gradient-to-b from-saffron-gold/40 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
