"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
    const email = "info@intensityspace.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <main className="min-h-screen overflow-hidden selection:bg-saffron-gold/30 selection:text-charcoal" style={{ background: "#E8F0FC" }}>
            <Navbar />

            {/* Split Layout — Image Left | Content Right */}
            <section className="relative min-h-screen flex flex-col md:flex-row pt-[90px]">

                {/* ─── Left: Stacked Images ─── */}
                <div className="w-full md:w-[45%] p-4 md:p-6 self-start space-y-4" style={{ background: "#E8F0FC" }}>
                    {/* Top image — Arched Corridor */}
                    <div className="relative w-full h-[35vh] md:h-[70vh] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-arches.jpg"
                            alt="Indian Architecture — Arched Corridor"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>

                    {/* Bottom image — Temple (hidden on mobile) */}
                    <div className="hidden md:block relative w-full h-[60vh] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-temple.jpg"
                            alt="Ancient Indian Temple"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>

                    {/* Third image — Cave Temple (hidden on mobile) */}
                    <div className="hidden md:block relative w-full h-[60vh] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-caves.jpg"
                            alt="Ancient Indian Cave Architecture"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>

                    {/* Visit India label */}
                    <div className="flex flex-col items-center gap-2 pt-4 opacity-80">
                        <p className="text-[10px] font-sans font-black tracking-[0.5em] uppercase text-charcoal">
                            Visit India
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] w-8 bg-charcoal/20" />
                            <div className="w-1 h-1 rounded-full bg-saffron-gold" />
                            <div className="h-[1px] w-8 bg-charcoal/20" />
                        </div>
                    </div>
                </div>

                {/* ─── Right: Contact Content ─── */}
                <div className="w-full md:w-[55%] relative overflow-hidden" style={{ background: "#E8F0FC" }}>

                    <div className="relative z-10 max-w-2xl mx-auto px-8 md:px-16 py-16 md:py-24 h-full flex flex-col justify-center">

                        {/* Heading Area */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-saffron-gold"></span>
                                <p className="font-hindi text-saffron-gold text-xs tracking-[0.2em] uppercase font-bold">
                                    संपर्क करें
                                </p>
                            </div>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-charcoal leading-[0.9] mb-8">
                                Get in<br />
                                <span className="text-charcoal/40 italic font-light">Touch.</span>
                            </h1>
                            <p className="text-charcoal/60 text-lg leading-relaxed mb-16 max-w-md font-light">
                                We'd love to hear from you — whether you're exploring partnerships, have questions about our mission, or want to join India's next space frontier.
                            </p>
                        </motion.div>

                        {/* Email CTA - Massive and Interactive */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-20"
                        >
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-6 p-6 rounded-2xl bg-charcoal/5 hover:bg-charcoal transition-colors duration-500 overflow-hidden w-full md:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-saffron-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <p className="text-[10px] font-sans font-black text-charcoal/40 group-hover:text-white/40 uppercase tracking-[0.3em] mb-2 transition-colors duration-500">
                                        Primary Contact
                                    </p>
                                    <span className="text-lg sm:text-2xl md:text-4xl font-sans font-light tracking-tight text-charcoal group-hover:text-white transition-colors duration-500 break-all">
                                        {email}
                                    </span>
                                </div>
                                <div className="relative z-10 w-12 h-12 rounded-full border border-charcoal/10 group-hover:border-white/20 flex items-center justify-center transition-colors duration-500 bg-white group-hover:bg-transparent hidden md:flex">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-charcoal group-hover:text-white transition-colors duration-500">
                                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </motion.div>

                        {/* Contact categories grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                        >
                            {/* General Inquiry */}
                            <div className="group border-l border-charcoal/10 pl-5 hover:border-saffron-gold transition-colors duration-300">
                                <h3 className="text-xs font-sans font-bold text-charcoal/90 uppercase tracking-[0.2em] mb-3 group-hover:text-saffron-gold transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-gold/50 group-hover:bg-saffron-gold transition-colors duration-300"></span>
                                    General Info
                                </h3>
                                <p className="text-charcoal/50 text-sm leading-relaxed font-light">
                                    Launch schedules, capabilities, or technical questions.
                                </p>
                            </div>

                            {/* Partnerships */}
                            <div className="group border-l border-charcoal/10 pl-5 hover:border-sky-blue transition-colors duration-300">
                                <h3 className="text-xs font-sans font-bold text-charcoal/90 uppercase tracking-[0.2em] mb-3 group-hover:text-sky-blue transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-blue/50 group-hover:bg-sky-blue transition-colors duration-300"></span>
                                    Partnerships
                                </h3>
                                <p className="text-charcoal/50 text-sm leading-relaxed font-light">
                                    Strategic collaborations and integrations.
                                </p>
                            </div>

                            {/* Careers */}
                            <div className="group border-l border-charcoal/10 pl-5 hover:border-saffron-gold transition-colors duration-300">
                                <h3 className="text-xs font-sans font-bold text-charcoal/90 uppercase tracking-[0.2em] mb-3 group-hover:text-saffron-gold transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-gold/50 group-hover:bg-saffron-gold transition-colors duration-300"></span>
                                    Careers
                                </h3>
                                <p className="text-charcoal/50 text-sm leading-relaxed font-light">
                                    Join one of India's most ambitious aerospace teams.
                                </p>
                            </div>

                            {/* Media */}
                            <div className="group border-l border-charcoal/10 pl-5 hover:border-sky-blue transition-colors duration-300">
                                <h3 className="text-xs font-sans font-bold text-charcoal/90 uppercase tracking-[0.2em] mb-3 group-hover:text-sky-blue transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-blue/50 group-hover:bg-sky-blue transition-colors duration-300"></span>
                                    Media
                                </h3>
                                <p className="text-charcoal/50 text-sm leading-relaxed font-light">
                                    Media inquiries, press releases, and requests.
                                </p>
                            </div>
                        </motion.div>

                        {/* Headquarters */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-20 pt-10 flex flex-col items-start border-t border-charcoal/10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[10px] font-sans font-bold text-charcoal/40 uppercase tracking-[0.4em]">
                                    HQ Location
                                </span>
                                <div className="h-[1px] w-12 bg-charcoal/10"></div>
                            </div>
                            <div className="flex items-end gap-6 justify-between w-full max-w-sm">
                                <div>
                                    <p className="font-hindi text-saffron-gold/70 text-xs mb-1">
                                        ಪ್ರಧಾನ ಕಛೇರಿ
                                    </p>
                                    <p className="text-charcoal/90 text-xl font-medium tracking-tight">
                                        Bengaluru, India
                                    </p>
                                </div>
                                <div className="text-charcoal/20">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
