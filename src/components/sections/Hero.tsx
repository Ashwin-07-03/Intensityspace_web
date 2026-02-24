"use client";

import { MandalaPattern, FloralMandala } from "@/components/IndianPatterns";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Intensity Space Launch Environment"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                />
            </div>

            {/* Overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[1]" />
            <div className="absolute inset-0 bg-charcoal/10 pointer-events-none z-[1]" />

            {/* Rotating mandala behind headlines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] text-saffron-gold/[0.06] pointer-events-none z-[2]">
                <FloralMandala className="absolute inset-0 w-full h-full text-saffron-gold opacity-30 drop-shadow-sm scale-110" />
                <MandalaPattern className="w-full h-full" />
            </div>

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
                <div className="w-[1px] h-10 bg-gradient-to-b from-saffron-gold/40 to-transparent" />
            </div>
        </section>
    );
}
