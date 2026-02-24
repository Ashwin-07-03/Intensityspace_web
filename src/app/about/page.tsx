"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const C = {
    blue: "#2E6BFF",
    bgBlue: "#E8F0FC",
    orange: "#FF7A1A",
    white: "#FFFFFF",
    navy: "#111111",   // dark black for all text
    navyMid: "#333333",   // softer black for secondary text
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
};

// ── The diagonal atmospheric sweep — the main visual effect ────────────────────
function AtmosphericSweep() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* The bright white core of the streak */}
                    <radialGradient id="sweepCore" cx="60%" cy="72%" r="55%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={C.white} stopOpacity="1" />
                        <stop offset="20%" stopColor={C.white} stopOpacity="0.85" />
                        <stop offset="55%" stopColor={C.bgBlue} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={C.bgBlue} stopOpacity="0" />
                    </radialGradient>

                    {/* The orange glow band - below the streak */}
                    <radialGradient id="orangeGlow" cx="55%" cy="80%" r="50%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={C.orange} stopOpacity="0.55" />
                        <stop offset="40%" stopColor={C.orange} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={C.orange} stopOpacity="0" />
                    </radialGradient>

                    {/* The blue haze that spreads wide */}
                    <radialGradient id="blueHaze" cx="70%" cy="50%" r="65%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={C.blue} stopOpacity="0.18" />
                        <stop offset="50%" stopColor={C.blue} stopOpacity="0.10" />
                        <stop offset="100%" stopColor={C.bgBlue} stopOpacity="0" />
                    </radialGradient>

                    <filter id="bigBlur">
                        <feGaussianBlur stdDeviation="40" />
                    </filter>
                    <filter id="medBlur">
                        <feGaussianBlur stdDeviation="22" />
                    </filter>
                    <filter id="softBlur">
                        <feGaussianBlur stdDeviation="10" />
                    </filter>
                </defs>

                {/* Wide blue haze — upper right */}
                <ellipse cx="720" cy="280" rx="560" ry="340"
                    fill="url(#blueHaze)" filter="url(#bigBlur)" />

                {/* The main diagonal atmospheric streak — wide blurred ellipse tilted */}
                <ellipse cx="620" cy="640" rx="680" ry="90"
                    fill="url(#sweepCore)" filter="url(#bigBlur)"
                    transform="rotate(-18 620 640)" />

                {/* Brighter white core line */}
                <ellipse cx="600" cy="650" rx="500" ry="40"
                    fill={C.white} opacity="0.7" filter="url(#medBlur)"
                    transform="rotate(-18 600 650)" />

                {/* Orange glow ribbon — below the white streak */}
                <ellipse cx="700" cy="720" rx="550" ry="70"
                    fill="url(#orangeGlow)" filter="url(#bigBlur)"
                    transform="rotate(-15 700 720)" />

                {/* Subtle inner bright line for the streak edge */}
                <ellipse cx="590" cy="640" rx="380" ry="22"
                    fill={C.orange} opacity="0.18" filter="url(#softBlur)"
                    transform="rotate(-18 590 640)" />
            </svg>
        </div>
    );
}

// ── Orbit circles with dot ────────────────────────────────────────────────────
function OrbitalRings() {
    return (
        <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full">
            {/* Rings */}
            <circle cx="220" cy="220" r="160" stroke={C.navy} strokeWidth="0.8"
                strokeDasharray="5 9" opacity="0.12" />
            <circle cx="220" cy="220" r="120" stroke={C.navy} strokeWidth="0.8"
                strokeDasharray="4 8" opacity="0.1" />
            <circle cx="220" cy="220" r="80" stroke={C.navy} strokeWidth="0.8"
                strokeDasharray="3 7" opacity="0.1" />
            <circle cx="220" cy="220" r="45" stroke={C.navy} strokeWidth="0.7"
                strokeDasharray="2 5" opacity="0.1" />

            {/* Orange dot */}
            <circle cx="290" cy="210" r="5.5" fill={C.orange} />
            <circle cx="290" cy="210" r="11" fill={C.orange} opacity="0.2" />
        </svg>
    );
}

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans overflow-x-hidden" style={{ background: C.bgBlue }}>
            <Navbar />

            {/* ══════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20"
                style={{ background: C.bgBlue }}>

                {/* Full-cover background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about-hero-bg.jpg"
                        alt="Cosmic background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-28">

                    {/* LEFT — text */}
                    <div>
                        {/* Eyebrow — slides in from left with expanding letter-spacing */}
                        <motion.p
                            initial={{ opacity: 0, x: -20, letterSpacing: "0.05em" }}
                            animate={{ opacity: 1, x: 0, letterSpacing: "0.35em" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xs font-semibold uppercase mb-6"
                            style={{ color: C.navyMid }}>
                            About Us
                        </motion.p>

                        {/* Headline — each line rises, staggered, no filter */}
                        <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.1] tracking-tight mb-8 overflow-hidden">
                            {[
                                { text: "Making space", col: C.navy, delay: 0.08 },
                                { text: "accessible,", col: C.navy, delay: 0.22 },
                                { text: "affordable,", col: C.navy, delay: 0.36 },
                                { text: "repeatable.", col: C.navy, delay: 0.50 },
                            ].map(({ text, col, delay }) => (
                                <motion.span
                                    key={text}
                                    initial={{ opacity: 0, y: 36 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ color: col, display: "block" }}>
                                    {text}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Sub-paragraph — fade up after headline finishes */}
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base leading-relaxed max-w-md"
                            style={{ color: C.navyMid }}>
                            Making space accessible, affordable, and repeatable for everyone —
                            to make life better on Earth.
                        </motion.p>
                    </div>

                    {/* RIGHT — orbital rings */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 1.4 }}
                        className="hidden md:flex items-center justify-center">
                        <div className="w-full max-w-[420px] aspect-square">
                            <OrbitalRings />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SPACE FOR EVERYONE — white
            ═══════════════════════════════════════════ */}
            <section className="relative py-32 px-6" style={{ background: C.white }}>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                    <div className="md:col-span-3">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
                            <span className="text-[10px] font-bold uppercase tracking-[0.45em]" style={{ color: C.navy }}>
                                Space for Everyone
                            </span>
                            <div className="mt-4 h-px w-8" style={{ background: C.orange }} />
                        </motion.div>
                    </div>
                    <div className="md:col-span-9">
                        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                            className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10"
                            style={{ color: C.navy }}>
                            We believe humanity&apos;s future<br />
                            <span style={{ color: C.blue }}>lies among the stars.</span>
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                                className="text-base leading-relaxed" style={{ color: C.navyMid }}>
                                By reducing the cost of launch, we open the door to a new era of exploration,
                                innovation, and discovery. Space should not be a privilege — it should be
                                a platform available to all.
                            </motion.p>
                            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                                className="text-base leading-relaxed" style={{ color: C.navyMid }}>
                                At Intensity, we are pioneering a transformative vision for the future of
                                space exploration. Our goal is to develop a fully reusable 2-stage medium-lift
                                launch vehicle that significantly lowers satellite launch costs.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                THE MISSION — white
            ═══════════════════════════════════════════ */}
            <section className="relative py-32 px-6" style={{ background: C.white }}>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                    <div className="md:col-span-3">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
                            <span className="text-[10px] font-bold uppercase tracking-[0.45em]" style={{ color: C.navy }}>
                                The Mission
                            </span>
                            <div className="mt-4 h-px w-8" style={{ background: C.blue }} />
                        </motion.div>
                    </div>
                    <div className="md:col-span-9">
                        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                            className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10"
                            style={{ color: C.navy }}>
                            Fully reusable.<br />
                            <span style={{ color: C.blue }}>Medium-lift.</span><br />
                            Built for India.
                        </motion.h2>
                        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                            className="text-base leading-relaxed mb-12 max-w-2xl" style={{ color: C.navyMid }}>
                            In a world where the demand for satellite deployment is rapidly increasing,
                            our innovation is crucial. A reusable 2-stage medium-lift launch vehicle
                            built indigenously — reliable, fast, and cost-effective.
                        </motion.p>
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                            style={{ borderTop: `1px solid ${C.blue}20` }}>
                            {[
                                { value: "2-Stage", label: "Fully Reusable Vehicle" },
                                { value: "LEO", label: "Primary Target Orbit" },
                                { value: "↓ Cost", label: "Dramatically Lower Launch Cost" },
                            ].map(({ value, label }, i) => (
                                <motion.div key={value} variants={fadeUp} initial="hidden" whileInView="show"
                                    viewport={{ once: true }} custom={i * 0.15}
                                    className="flex items-center justify-between py-6 cursor-default"
                                    style={{ borderBottom: `1px solid ${C.blue}20` }}>
                                    <p className="text-5xl md:text-6xl font-black tracking-tight transition-colors duration-300"
                                        style={{ color: C.navy }}
                                        onMouseEnter={e => (e.currentTarget.style.color = C.orange)}
                                        onMouseLeave={e => (e.currentTarget.style.color = C.navy)}>
                                        {value}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.3em] text-right max-w-[160px]"
                                        style={{ color: C.navyMid }}>
                                        {label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                VALUES — white
            ═══════════════════════════════════════════ */}
            <section className="relative py-32 px-6" style={{ background: C.white }}>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                    <div className="md:col-span-3">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
                            <span className="text-[10px] font-bold uppercase tracking-[0.45em]" style={{ color: C.navy }}>
                                Our Values
                            </span>
                            <div className="mt-4 h-px w-8" style={{ background: C.blue }} />
                        </motion.div>
                    </div>
                    <div className="md:col-span-9">
                        {[
                            { num: "01", title: "Accessibility", body: "Launch technology designed to lower barriers and open space to more missions, more ideas, more people." },
                            { num: "02", title: "Reliability", body: "Every system engineered with precision. Safety and repeatability are not optional — they are the standard." },
                            { num: "03", title: "Ambition", body: "We are not building incrementally. We are building the foundation for India's self-reliant orbital economy." },
                        ].map(({ num, title, body }, i) => (
                            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show"
                                viewport={{ once: true }} custom={i + 1}
                                className="group flex gap-10 md:gap-16 py-10 cursor-default"
                                style={{ borderBottom: `1px solid ${C.blue}18` }}>
                                <span className="text-6xl md:text-8xl font-black leading-none select-none shrink-0 transition-colors duration-500"
                                    style={{ color: `${C.blue}18` }}
                                    onMouseEnter={e => (e.currentTarget.style.color = C.orange)}
                                    onMouseLeave={e => (e.currentTarget.style.color = `${C.blue}18`)}>
                                    {num}
                                </span>
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold mb-3" style={{ color: C.navy }}>{title}</h3>
                                    <p className="text-base leading-relaxed max-w-lg" style={{ color: C.navyMid }}>{body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                CLOSING QUOTE — light blue bg again to mirror hero
            ═══════════════════════════════════════════ */}
            <section className="relative py-32 px-6 text-center overflow-hidden"
                style={{ background: C.bgBlue }}>

                {/* Mirrored atmospheric sweep at the bottom */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ transform: "scaleX(-1) scaleY(-1)" }}>
                    <AtmosphericSweep />
                </div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
                        style={{ color: C.navyMid }}>
                        Our North Star
                    </p>
                    <blockquote className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-8"
                        style={{ color: C.navy }}>
                        &ldquo;जहाँ चाह है,<br />
                        <span style={{ color: C.blue }}>वहाँ राह है।&rdquo;</span>
                    </blockquote>
                    <p className="text-base" style={{ color: C.navyMid }}>
                        Where there is a will, there is a way.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
