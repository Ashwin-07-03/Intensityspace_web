"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { LotusAccent, MandalaPattern } from "@/components/IndianPatterns";

const missions = [
    {
        capacity: "6,000kg",
        orbit: "LEO",
        fullName: "Low Earth Orbit",
        tagline: "Reach. Deploy. Dominate.",
        description: "The workhorse of space logistics, delivering maximum payload to Low Earth Orbit for satellites, stations, and beyond.",
        image: "/mission-leo.png",
        tags: ["Satellite Deployment", "ISS Resupply", "Commercial"]
    },
    {
        capacity: "4,000kg",
        orbit: "SSO",
        fullName: "Sun-Synchronous Orbit",
        tagline: "Follow the light. Map the Earth.",
        description: "Perfect for Earth observation and remote sensing missions requiring consistent solar illumination.",
        image: "/mission-sso.png",
        tags: ["Earth Observation", "Remote Sensing", "Imaging"]
    },
    {
        capacity: "1,500kg",
        orbit: "GTO",
        fullName: "Geostationary Transfer Orbit",
        tagline: "Lock position. Cover continents.",
        description: "Gateway to geostationary orbit for communications satellites serving global coverage zones.",
        image: "/mission-gto.png",
        tags: ["Communications", "Broadcasting", "Telecom"]
    },
    {
        capacity: "1,200kg",
        orbit: "TLI",
        fullName: "Trans-Lunar Injection",
        tagline: "Beyond Earth. To the Moon.",
        description: "Enabling lunar missions and deep space exploration with precision trajectory insertion.",
        image: "/mission-tli.png",
        tags: ["Lunar Mission", "Deep Space", "Exploration"]
    }
];

export default function MissionPage() {
    return (
        <main className="min-h-screen bg-white text-charcoal selection:bg-saffron-gold/20 font-sans overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mission-main-bg.png"
                        alt="Cinematic Space"
                        fill
                        className="object-cover scale-105 opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-light/20 to-white" />
                </div>

                {/* Mandala bg */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] text-saffron-gold/[0.04] animate-mandala-spin pointer-events-none z-[1]">
                    <MandalaPattern className="w-full h-full" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-2"
                    >
                        <span className="font-hindi text-saffron-gold/60 text-sm tracking-widest">
                            परिचालन क्षमताएं
                        </span>
                        <br />
                        <span className="text-charcoal/40 text-[9px] font-black tracking-[0.5em] uppercase">
                            Operational Capabilities
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-charcoal"
                    >
                        Mission<br />
                        <span className="text-charcoal/25">Profiles</span>
                    </motion.h1>
                </div>
            </section>

            {/* Mission Cards */}
            <section className="relative z-20 bg-white py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {missions.map((mission, index) => (
                            <motion.div
                                key={mission.orbit}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <Image
                                    src={mission.image}
                                    alt={mission.fullName}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/90" />

                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    <div className="flex items-center gap-2">
                                        <LotusAccent className="w-5 h-5 text-saffron-gold/60" />
                                        <p className="text-white/90 text-sm font-medium tracking-wide" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                            {mission.tagline}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                                            {mission.fullName}.
                                        </h2>
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                                            {mission.description}
                                        </p>
                                        <button className="inline-flex items-center px-5 py-2.5 rounded-full bg-saffron-gold/20 hover:bg-saffron-gold/30 border border-saffron-gold/20 transition-all duration-300">
                                            <span className="text-white text-xs font-medium tracking-wide">
                                                {mission.capacity} to {mission.orbit}
                                            </span>
                                        </button>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-white/50 text-xs font-medium">
                                                intensity.{mission.orbit.toLowerCase()}
                                            </span>
                                            <span className="text-white/50 text-xs font-medium">
                                                {mission.tags.join(' + ')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA row */}
            <section className="py-12 border-t border-charcoal/5 text-center">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-3 group px-8 py-3 rounded-full border border-charcoal/10 hover:border-saffron-gold/40 hover:bg-saffron-gold/5 transition-all"
                >
                    <span className="font-hindi text-saffron-gold/50 text-xs mr-2">मिशन कॉन्फ़िगर करें</span>
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-charcoal">Configure Mission</span>
                    <div className="w-6 h-[1px] bg-saffron-gold/40 group-hover:w-10 transition-all" />
                </a>
            </section>

            <Footer />
        </main>
    );
}
