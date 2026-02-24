"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
};

export default function VehiclePage() {
    return (
        <main className="min-h-screen font-sans overflow-x-hidden" style={{ background: "#FFFFFF", color: "#111111" }}>
            <Navbar />

            {/* ════ HEADER ════ */}
            <section className="relative pt-32 pb-10 px-6 text-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,82,26,0.05) 0%, transparent 70%)" }} />

                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
                    className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-[1px]" style={{ background: "rgba(196,82,26,0.4)" }} />
                        <span className="text-[9px] font-bold uppercase tracking-[0.55em]" style={{ color: "#C4521A" }}>
                            Launch Vehicle · Intensity Space
                        </span>
                        <div className="w-12 h-[1px]" style={{ background: "rgba(196,82,26,0.4)" }} />
                    </div>

                    <h1 className="leading-none mb-4">
                        <span
                            className="block text-7xl md:text-9xl font-black tracking-tighter"
                            style={{ color: "#111111" }}
                        >
                            INTENSITY
                        </span>
                        <span
                            className="block text-[100px] md:text-[160px] font-black leading-[0.85] tracking-tighter"
                            style={{
                                WebkitTextStroke: "2px #C4521A",
                                color: "transparent",
                                letterSpacing: "-0.05em",
                            } as React.CSSProperties}
                        >
                            —1
                        </span>
                    </h1>

                    <p className="text-sm tracking-[0.2em] uppercase mt-4" style={{ color: "#4A4A4A" }}>
                        2-Stage · Medium-Lift · Fully Reusable
                    </p>
                </motion.div>
            </section>



            {/* ════ CTA ════ */}
            <section className="relative py-24 px-6 text-center"
                style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FFF4EE" }}>
                <div className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(196,82,26,0.07) 0%, transparent 70%)" }} />

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="relative z-10 max-w-2xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6" style={{ color: "#C4521A" }}>
                        Book a Launch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: "#111111" }}>
                        Ready to reach orbit?
                    </h2>
                    <p className="text-base mb-10" style={{ color: "#4A4A4A" }}>
                        Get in touch with our team to discuss mission requirements, pricing, and launch windows.
                    </p>
                    <a href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300"
                        style={{ background: "#C4521A", color: "#FFFFFF" }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#9E3D0E"}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#C4521A"}>
                        Contact Us
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
