"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// ─── Colour Roles ─────────────────────────────────────────────────────────────
// bg-hero:       #406B8C  (Queen Blue)
// bg-body:       #E4C5AF  (Desert Sand)
// bg-cta:        #406B8C  (Queen Blue)
// text-primary:  #406B8C  (Queen Blue)
// text-heading:  #FFFFFF  (hero) | #406B8C (body)
// accent-hot:    #EB8445  (Mandarin)   — taglines, hover, CTA, orbit label hover
// accent-warm:   #A4485E  (English Red) — tags / pills
// accent-cool:   #9CBCC6  (Cadet Blue) — borders, muted text, floral elements
// ─────────────────────────────────────────────────────────────────────────────

const C = {
    queenBlue: "#406B8C",
    englishRed: "#A4485E",
    mandarin: "#EB8445",
    cadetBlue: "#9CBCC6",
    darkHero: "#1C3347",
    white: "#FFFFFF",
};

const missions = [
    {
        index: "01",
        capacity: "6,000 kg",
        orbit: "LEO",
        fullName: "Low Earth Orbit",
        tagline: "Reach. Deploy. Dominate.",
        description:
            "The workhorse of space logistics, delivering maximum payload for satellite constellations, space stations, and commercial missions requiring high-frequency access.",
        tags: ["Satellite Deployment", "ISS Resupply", "Commercial"],
    },
    {
        index: "02",
        capacity: "4,000 kg",
        orbit: "SSO",
        fullName: "Sun-Synchronous Orbit",
        tagline: "Follow the light. Map the Earth.",
        description:
            "Consistent solar illumination across every pass makes this the ideal orbit for Earth observation, environmental monitoring, and high-resolution remote sensing.",
        tags: ["Earth Observation", "Remote Sensing", "Imaging"],
    },
    {
        index: "03",
        capacity: "1,500 kg",
        orbit: "GTO",
        fullName: "Geostationary Transfer",
        tagline: "Lock position. Cover continents.",
        description:
            "The gateway to geostationary orbit — enabling global communications satellites to serve entire hemispheres with stable, high-bandwidth coverage.",
        tags: ["Communications", "Broadcasting", "Telecom"],
    },
    {
        index: "04",
        capacity: "1,200 kg",
        orbit: "TLI",
        fullName: "Trans-Lunar Injection",
        tagline: "Beyond Earth. To the Moon.",
        description:
            "Precision trajectory insertion for lunar and deep-space missions, opening the frontier beyond Earth's gravity well for science and exploration.",
        tags: ["Lunar Mission", "Deep Space", "Exploration"],
    },
];

// ── Decorative SVG — consistent palette ────────────────────────────────────
function FloralLarge() {
    return (
        <svg viewBox="0 0 500 500" width={420} height={420} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
            {Array.from({ length: 28 }).map((_, i) => (
                <path key={`a${i}`} d="M250 250 Q228 95 250 40 Q272 95 250 250"
                    fill={C.mandarin} opacity="0.55" transform={`rotate(${i * 12.857} 250 250)`} />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
                <path key={`b${i}`} d="M250 250 Q215 155 250 100 Q285 155 250 250"
                    fill={C.cadetBlue} opacity="0.6" transform={`rotate(${i * 22.5} 250 250)`} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
                <path key={`c${i}`} d="M250 250 Q234 192 250 158 Q266 192 250 250"
                    fill={C.cadetBlue} opacity="0.7" transform={`rotate(${i * 36} 250 250)`} />
            ))}
            <circle cx="250" cy="250" r="44" stroke={C.englishRed} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.5" />
            <circle cx="250" cy="250" r="26" fill={C.englishRed} opacity="0.35" />
            <circle cx="250" cy="250" r="10" fill={C.white} opacity="0.5" />
        </svg>
    );
}

function FloralSmall() {
    return (
        <svg viewBox="0 0 400 400" width={280} height={280} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
            {Array.from({ length: 18 }).map((_, i) => (
                <path key={`d${i}`} d="M200 200 Q180 90 200 40 Q220 90 200 200"
                    fill={C.cadetBlue} opacity="0.65" transform={`rotate(${i * 20} 200 200)`} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
                <path key={`e${i}`} d="M200 200 Q184 130 200 95 Q216 130 200 200"
                    fill={C.mandarin} opacity="0.6" transform={`rotate(${i * 36} 200 200)`} />
            ))}
            <circle cx="200" cy="200" r="12" fill={C.cadetBlue} opacity="0.6" />
        </svg>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
};

export default function MissionPage() {
    return (
        <main className="min-h-screen font-sans overflow-x-hidden" style={{ background: C.white }}>
            <Navbar />

            {/* ══════════════════════════════════════════
                HERO  —  Queen Blue dark
            ═══════════════════════════════════════════ */}
            <section className="relative pt-28 pb-20 px-6 md:px-16 overflow-hidden" style={{ background: C.darkHero }}>

                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: `radial-gradient(circle, ${C.cadetBlue} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0"
                    style={{ background: `radial-gradient(ellipse 70% 65% at 65% 55%, ${C.queenBlue} 0%, transparent 70%)` }} />

                {/* Floral left */}
                <div className="absolute -left-24 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FloralLarge />
                </div>
                {/* Floral top-right */}
                <div className="absolute -right-14 -top-14 pointer-events-none">
                    <FloralSmall />
                </div>

                {/* Rings */}
                <svg viewBox="0 0 600 600"
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-auto opacity-[0.06]"
                    fill="none">
                    <circle cx="300" cy="300" r="280" stroke={C.cadetBlue} strokeWidth="1" />
                    <circle cx="300" cy="300" r="220" stroke={C.mandarin} strokeWidth="0.8" />
                    <circle cx="300" cy="300" r="160" stroke={C.cadetBlue} strokeWidth="0.6" />
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line key={i} x1="300" y1="20" x2="300" y2="580"
                            stroke={C.mandarin} strokeWidth="0.4" opacity="0.5"
                            transform={`rotate(${i * 15} 300 300)`} />
                    ))}
                </svg>

                {/* Text */}
                <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                            className="font-hindi text-sm tracking-widest mb-2"
                            style={{ color: `${C.mandarin}CC` }}>
                            परिचालन क्षमताएं
                        </motion.p>
                        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
                            style={{ color: C.white }}>
                            Mission<br />
                            <span style={{ color: C.cadetBlue }}>Profiles</span>
                        </motion.h1>
                    </div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-[11px] font-bold tracking-[0.35em] uppercase md:text-right max-w-[200px]"
                        style={{ color: `${C.cadetBlue}70` }}>
                        Four orbital classes.<br />One launch system.
                    </motion.p>
                </div>

                {/* Fade into body */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
                    style={{ background: `linear-gradient(to bottom, transparent, ${C.white})` }} />
            </section>

            {/* ══════════════════════════════════════════
                MISSION LIST  —  Desert Sand body
            ═══════════════════════════════════════════ */}
            <section className="py-4 px-6 md:px-16" style={{ background: C.white }}>
                <div className="max-w-5xl mx-auto">
                    {missions.map((mission, index) => (
                        <motion.div key={mission.orbit}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}>

                            {/* Rule */}
                            <div className="h-px" style={{ background: `${C.queenBlue}25` }} />

                            <div className="py-10 grid grid-cols-12 gap-6 group">
                                {/* Index */}
                                <div className="col-span-2 md:col-span-1 pt-1">
                                    <span className="text-[11px] font-black tracking-[0.3em]"
                                        style={{ color: `${C.queenBlue}60` }}>
                                        {mission.index}
                                    </span>
                                </div>

                                {/* Orbit watermark */}
                                <div className="hidden md:flex col-span-2 items-center">
                                    <span className="text-6xl font-black tracking-tighter select-none transition-colors duration-500"
                                        style={{ color: `${C.queenBlue}15` }}
                                        onMouseEnter={e => (e.currentTarget.style.color = `${C.mandarin}50`)}
                                        onMouseLeave={e => (e.currentTarget.style.color = `${C.queenBlue}15`)}>
                                        {mission.orbit}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="col-span-10 md:col-span-6 space-y-3">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight"
                                            style={{ color: C.queenBlue }}>
                                            {mission.fullName}
                                        </h2>
                                        {/* Tagline — consistently Mandarin */}
                                        <p className="text-xs font-semibold tracking-widest uppercase mt-1"
                                            style={{ color: C.mandarin }}>
                                            {mission.tagline}
                                        </p>
                                    </div>
                                    <p className="text-sm leading-relaxed max-w-lg"
                                        style={{ color: `${C.queenBlue}99` }}>
                                        {mission.description}
                                    </p>
                                    {/* Tags — consistently English Red */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {mission.tags.map((tag) => (
                                            <span key={tag}
                                                className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                                                style={{
                                                    color: C.englishRed,
                                                    borderColor: `${C.englishRed}45`,
                                                    background: `${C.englishRed}0E`,
                                                }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Capacity — consistently Queen Blue → Mandarin on hover */}
                                <div className="col-span-12 md:col-span-3 flex md:flex-col md:items-end md:justify-center gap-3 md:gap-1">
                                    <div className="text-right">
                                        <p className="text-3xl md:text-4xl font-black tracking-tight transition-colors duration-400 cursor-default"
                                            style={{ color: C.queenBlue }}
                                            onMouseEnter={e => (e.currentTarget.style.color = C.mandarin)}
                                            onMouseLeave={e => (e.currentTarget.style.color = C.queenBlue)}>
                                            {mission.capacity}
                                        </p>
                                        <p className="text-[9px] font-bold tracking-[0.35em] uppercase mt-0.5"
                                            style={{ color: `${C.queenBlue}50` }}>
                                            Payload to {mission.orbit}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="h-px" style={{ background: `${C.queenBlue}25` }} />
                </div>
            </section>

            {/* ══════════════════════════════════════════
                CTA  —  Queen Blue bg
            ═══════════════════════════════════════════ */}
            <section className="relative py-16 px-6 md:px-16 text-center overflow-hidden"
                style={{ background: C.queenBlue }}>
                {/* Ghost floral */}
                <div className="pointer-events-none absolute right-8 bottom-0 translate-y-1/4">
                    <FloralSmall />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: `radial-gradient(circle, ${C.white} 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
                        style={{ color: C.cadetBlue }}>
                        Ready to Launch
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-4 group">
                        <div className="h-px transition-all duration-300 group-hover:w-14 w-8"
                            style={{ background: `${C.white}50` }} />
                        <span className="font-hindi text-xs" style={{ color: `${C.white}70` }}>
                            मिशन कॉन्फ़िगर करें
                        </span>
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase transition-colors duration-300 group-hover:opacity-100 opacity-75"
                            style={{ color: C.mandarin }}>
                            Configure a Mission
                        </span>
                        <div className="h-px transition-all duration-300 group-hover:w-14 w-8"
                            style={{ background: `${C.white}50` }} />
                    </a>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
