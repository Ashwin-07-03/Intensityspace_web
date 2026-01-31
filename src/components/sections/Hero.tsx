export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-16 overflow-hidden">
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

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Background Decorations */}
            <div className="absolute left-[8%] top-0 w-[1px] h-full bg-white/[0.05] pointer-events-none z-10" />
            <div className="absolute right-[8%] top-0 w-[1px] h-full bg-white/[0.05] pointer-events-none z-10" />

            {/* Main Content */}
            <div className="relative text-center max-w-5xl mx-auto z-10">
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-heading font-black leading-[0.85] tracking-[-0.05em] text-white uppercase drop-shadow-2xl">
                    Orbital
                </h1>
                <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-heading font-black leading-[0.85] tracking-[-0.05em] text-white/30 uppercase drop-shadow-2xl">
                    Supremacy
                </h1>

                <p className="mt-16 text-sm text-white/60 font-medium tracking-[0.5em] uppercase">
                    Next-Gen Orbital Launches
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
