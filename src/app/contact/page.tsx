"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
    const email = "info@intensityspace.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <main className="min-h-screen bg-beige overflow-hidden selection:bg-saffron-gold/30 selection:text-charcoal">
            <Navbar />

            {/* Split Layout — Image Left | Content Right */}
            <section className="relative min-h-screen flex flex-col md:flex-row pt-[90px]">

                {/* ─── Left: Stacked Images ─── */}
                <div className="w-full md:w-[45%] p-4 md:p-6 self-start space-y-4">
                    {/* Top image — Arched Corridor */}
                    <div className="relative w-full h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-arches.jpg"
                            alt="Indian Architecture — Arched Corridor"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>

                    {/* Bottom image — Temple */}
                    <div className="relative w-full h-[35vh] md:h-[60vh] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-temple.jpg"
                            alt="Ancient Indian Temple"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>

                    {/* Third image — Cave Temple */}
                    <div className="relative w-full h-[35vh] md:h-[60vh] rounded-2xl overflow-hidden">
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
                <div className="w-full md:w-[55%] relative overflow-hidden" style={{ backgroundColor: '#F9F7F4' }}>



                    <div className="relative z-10 max-w-xl mx-auto px-8 md:px-16 py-16 md:py-24">

                        {/* Hindi heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="font-hindi text-saffron-gold text-sm tracking-widest mb-2">
                                संपर्क करें
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-black leading-[1] mb-4">
                                Get in<br />Touch.
                            </h1>
                            <p className="text-black/80 text-sm leading-relaxed mb-12 max-w-md">
                                We&apos;d love to hear from you — whether you&apos;re exploring partnerships, have questions about our mission, or want to join India&apos;s next space frontier.
                            </p>
                        </motion.div>

                        {/* Email CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mb-16"
                        >
                            <p className="text-[10px] font-sans font-black text-black/60 uppercase tracking-[0.4em] mb-4">
                                Write to us
                            </p>
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block"
                            >
                                <span className="text-xl md:text-2xl font-sans font-light tracking-tight text-black/90 group-hover:text-saffron-gold transition-colors duration-500">
                                    {email}
                                </span>
                                <div className="h-[1.5px] w-0 bg-saffron-gold group-hover:w-full transition-all duration-500 mt-1" />
                            </a>
                        </motion.div>

                        {/* Contact categories */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="space-y-10 border-t border-charcoal/8 pt-10"
                        >
                            {/* General Inquiry */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-saffron-gold" />
                                    <h3 className="text-[10px] font-sans font-black text-black/85 uppercase tracking-[0.3em]">
                                        General Inquiry
                                    </h3>
                                </div>
                                <p className="text-black/70 text-sm leading-relaxed pl-5">
                                    Reach out about our launch schedules, mission capabilities, or technical questions.
                                </p>
                            </div>

                            {/* Partnerships */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
                                    <h3 className="text-[10px] font-sans font-black text-black/85 uppercase tracking-[0.3em]">
                                        Partnerships
                                    </h3>
                                </div>
                                <p className="text-black/70 text-sm leading-relaxed pl-5">
                                    Strategic collaborations and supplier integrations for the Intensity-1 platform.
                                </p>
                            </div>

                            {/* Careers */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-saffron-gold" />
                                    <h3 className="text-[10px] font-sans font-black text-black/85 uppercase tracking-[0.3em]">
                                        Careers
                                    </h3>
                                </div>
                                <p className="text-black/70 text-sm leading-relaxed pl-5">
                                    Join one of India&apos;s most ambitious aerospace teams. Open roles updated regularly.
                                </p>
                            </div>

                            {/* Media */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
                                    <h3 className="text-[10px] font-sans font-black text-black/85 uppercase tracking-[0.3em]">
                                        Media &amp; Press
                                    </h3>
                                </div>
                                <p className="text-black/70 text-sm leading-relaxed pl-5">
                                    Media inquiries, press releases, and interview requests.
                                </p>
                            </div>
                        </motion.div>

                        {/* Headquarters */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-16 pt-10 border-t border-charcoal/8"
                        >
                            <p className="text-[10px] font-sans font-black text-black/60 uppercase tracking-[0.4em] mb-3">
                                Headquarters
                            </p>
                            <p className="font-hindi text-saffron-gold/70 text-xs mb-2">
                                ಪ್ರಧಾನ ಕಛೇರಿ
                            </p>
                            <p className="text-black/80 text-sm leading-relaxed">
                                Bengaluru, India
                            </p>

                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
