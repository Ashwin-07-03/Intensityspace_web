"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const missions = [
    {
        capacity: "6,000kg",
        orbit: "LEO",
        fullName: "LOW EARTH ORBIT",
        image: "/mission-leo.png"
    },
    {
        capacity: "1,500kg",
        orbit: "GTO",
        fullName: "GEOSTATIONARY TRANSFER ORBIT",
        image: "/mission-gto.png"
    },
    {
        capacity: "1,200kg",
        orbit: "TLI",
        fullName: "TRANS-LUNAR INJECTION",
        image: "/mission-tli.png"
    }
];

export default function MissionPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-white/20 font-heading overflow-x-hidden">
            <Navbar dark />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/80 to-[#020617] z-10" />
                    <Image
                        src="/mission-main-bg.png"
                        alt="Cinematic Space"
                        fill
                        className="object-cover scale-105 animate-slow-zoom opacity-70"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-white/40 text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase">
                            Orbital Capabilities
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-[-0.05em] uppercase leading-[0.85] drop-shadow-2xl"
                    >
                        Mission<br />
                        <span className="text-white/30">Profiles</span>
                    </motion.h1>
                </div>

                {/* Vertical Lines Decoration */}
                <div className="absolute left-[8%] top-0 w-[1px] h-full bg-white/[0.05] pointer-events-none z-10" />
                <div className="absolute right-[8%] top-0 w-[1px] h-full bg-white/[0.05] pointer-events-none z-10" />
            </section>

            {/* Mission Details Section */}
            <section className="relative z-20 pb-48 px-4 sm:px-8 lg:px-16 -mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missions.map((mission, index) => (
                            <motion.div
                                key={mission.orbit}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-white/30 group-hover:-translate-y-2">
                                    {/* Border-to-Border Image Container */}
                                    <div className="relative aspect-square w-full overflow-hidden border-b border-white/5">
                                        <Image
                                            src={mission.image}
                                            alt={mission.fullName}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="p-8 text-center relative z-10">
                                        <div className="space-y-6">
                                            <div>
                                                <span className="text-white/30 text-[8px] font-black tracking-[0.4em] uppercase block mb-2">
                                                    Max Payload
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-white transition-colors duration-500">
                                                    {mission.capacity}
                                                </h2>
                                            </div>

                                            <div className="pt-4 border-t border-white/5">
                                                <div className="flex flex-col items-center gap-1">
                                                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-white/90 group-hover:text-white">
                                                        {mission.orbit}
                                                    </h3>
                                                    <p className="text-white/30 text-[9px] font-black tracking-[0.25em] uppercase">
                                                        {mission.fullName}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Ambient Glow */}
                                    <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
