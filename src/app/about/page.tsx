"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { RangoliDivider, MandalaPattern } from "@/components/IndianPatterns";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-charcoal selection:bg-saffron-gold/30 font-sans overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mission-main-bg.png"
                        alt="Cinematic Space"
                        fill
                        className="object-cover scale-105 opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-light/20 to-white" />
                </div>

                {/* Background mandala */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-saffron-gold/[0.05] animate-mandala-spin pointer-events-none z-[1]">
                    <MandalaPattern className="w-full h-full" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="font-hindi text-saffron-gold/60 text-sm tracking-widest">
                            हमारी कहानी
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
                    >
                        Our<br />
                        <span className="text-charcoal/20">Story</span>
                    </motion.h1>
                </div>
            </section>

            {/* 01 / Vision */}
            <section className="relative z-20 bg-white py-24 border-b border-charcoal/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0"
                        >
                            <span className="text-charcoal/20 text-[10px] font-black tracking-[0.5em] uppercase">
                                01 / दृष्टि (Vision)
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-4xl"
                        >
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-charcoal uppercase italic">
                                Making space accessible, affordable, and sovereign — building India&apos;s own path to the stars.
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </section>

            <RangoliDivider className="text-saffron-gold" />

            {/* 02 / Heritage */}
            <section className="relative z-20 bg-white py-24 border-b border-charcoal/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0"
                        >
                            <span className="text-charcoal/20 text-[10px] font-black tracking-[0.5em] uppercase">
                                02 / विरासत (Heritage)
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-4xl"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] text-charcoal mb-6">
                                From Aryabhata to Chandrayaan — India has always looked upward.
                            </h2>
                            <p className="text-charcoal/50 text-lg leading-relaxed mb-4">
                                India&apos;s relationship with the cosmos spans millennia. From the astronomical observations of ancient scholars to ISRO&apos;s remarkable achievements on a fraction of global budgets, we carry a legacy of doing more with less.
                            </p>
                            <p className="text-charcoal/50 text-lg leading-relaxed">
                                Intensity Space continues this tradition — combining frugal engineering with world-class ambition. We are not imitating the West. We are building India&apos;s own space infrastructure, rooted in our unique strengths.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <RangoliDivider className="text-saffron-gold" />

            {/* 03 / Mission */}
            <section className="relative z-20 bg-white py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0"
                        >
                            <span className="text-charcoal/20 text-[10px] font-black tracking-[0.5em] uppercase">
                                03 / मिशन (Mission)
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-4xl"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] text-charcoal mb-6">
                                Sovereign access to space for every Indian ambition.
                            </h2>
                            <p className="text-charcoal/50 text-lg leading-relaxed mb-4">
                                We believe India deserves its own reliable, cost-effective launch infrastructure — not dependent on foreign providers, not constrained by geopolitics. Intensity Space is building the vehicles that will carry India&apos;s satellites, experiments, and dreams into orbit.
                            </p>
                            <p className="font-hindi text-saffron-gold/60 text-base mt-6">
                                &ldquo;जहाँ चाह है, वहाँ राह है&rdquo; — Where there is a will, there is a way.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
