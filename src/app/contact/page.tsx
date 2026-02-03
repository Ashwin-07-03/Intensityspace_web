"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
    const email = "info@intensityspace.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <main className="min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
            {/* Force Navbar to be transparent/dark-compatible */}
            <Navbar dark />

            {/* Contact Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
                {/* Background Animation / Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
                </div>

                {/* Grid Lines */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute left-[8%] top-0 w-[1px] h-full bg-white/[0.2]" />
                    <div className="absolute right-[8%] top-0 w-[1px] h-full bg-white/[0.2]" />
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-[10px] md:text-xs text-white/40 font-heading font-black tracking-[0.8em] uppercase mb-12">
                            Communication // Channel 01
                        </p>

                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black leading-[0.85] tracking-[-0.04em] text-white uppercase mb-16">
                            Lets <br />
                            <span className="text-white/20">Talk</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="group relative inline-block mb-32"
                    >
                        <a
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block py-4 px-2"
                        >
                            <span className="relative z-10 text-2xl md:text-4xl lg:text-7xl font-heading font-light tracking-tighter text-white/40 group-hover:text-white transition-all duration-700 ease-in-out">
                                {email}
                            </span>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-700 ease-in-out group-hover:w-full" />
                        </a>

                        <p className="mt-6 text-[10px] text-white/20 tracking-[0.5em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700">
                            Click to open Gmail
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-t border-white/5 pt-16"
                    >
                        <div>
                            <h3 className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.4em] mb-6">General Inbox</h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light">
                                For inquiries regarding our mission, launch schedules, and corporate information.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.4em] mb-6">Partnerships</h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light">
                                Strategic collaborations and supplier integrations for the Intensity-1 platform.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.4em] mb-6">Headquarters</h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light">
                                Distributed global operations with core infrastructure in development.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Down */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
