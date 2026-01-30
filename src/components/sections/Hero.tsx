export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-16 bg-[#FFFDF8]">
            {/* Background Decorations */}
            <div className="absolute left-[8%] top-0 w-[1px] h-full bg-amber-950/[0.03] pointer-events-none" />
            <div className="absolute right-[8%] top-0 w-[1px] h-full bg-amber-950/[0.03] pointer-events-none" />

            {/* Main Content */}
            <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-heading font-black leading-[0.85] tracking-[-0.05em] text-amber-950 uppercase">
                    Orbital
                </h1>
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-heading font-black leading-[0.85] tracking-[-0.05em] text-amber-950/15 uppercase">
                    Supremacy
                </h1>

                <p className="mt-16 text-sm text-amber-900/40 font-medium tracking-[0.5em] uppercase">
                    Next-Gen Orbital Launches
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-[1px] h-10 bg-gradient-to-b from-amber-950/30 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
