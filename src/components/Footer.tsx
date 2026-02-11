"use client";

import Image from "next/image";
import Link from "next/link";
import { MandalaPattern, RangoliDivider } from "./IndianPatterns";

export default function Footer() {
    return (
        <footer className="relative bg-white text-charcoal py-16 px-8 overflow-hidden border-t border-saffron-gold/10">
            {/* Subtle warm orange glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-saffron-gold/[0.04] blur-[80px] rounded-full pointer-events-none" />

            {/* Mandala watermark background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-saffron-gold/[0.04] animate-mandala-spin pointer-events-none">
                <MandalaPattern className="w-full h-full" />
            </div>

            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0">
                <RangoliDivider className="text-saffron-gold/50" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="Intensity Space"
                                    fill
                                    className="object-contain brightness-0"
                                />
                            </div>
                            <span className="text-sm font-sans font-bold tracking-tight uppercase">
                                Intensity Space
                            </span>
                        </Link>
                        <p className="text-charcoal/40 text-sm mb-3">
                            Pioneering India&apos;s future in orbital launches and space transportation.
                        </p>
                        {/* Devanagari tagline */}
                        <p className="font-hindi text-saffron-gold/70 text-sm tracking-wide">
                            भारत से अंतरिक्ष तक
                        </p>
                        {/* Made in India badge */}
                        <div className="flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-saffron-gold/5 border border-saffron-gold/15 w-fit">

                            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-saffron-gold">
                                Made in India
                            </span>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-semibold text-charcoal/30 uppercase tracking-widest mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">About Us</Link></li>
                            <li><Link href="/mission" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Mission</Link></li>
                            <li><Link href="/team" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Team</Link></li>
                            <li><Link href="/updates" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Updates</Link></li>
                        </ul>
                    </div>

                    {/* Vehicle & Services */}
                    <div>
                        <h4 className="text-xs font-semibold text-charcoal/30 uppercase tracking-widest mb-4">
                            Vehicle
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/vehicle" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Intensity-1</Link></li>
                            <li><Link href="/vehicle" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Specifications</Link></li>
                            <li><Link href="/vehicle" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Propulsion</Link></li>
                            <li><Link href="/suppliers" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Suppliers</Link></li>
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h4 className="text-xs font-semibold text-charcoal/30 uppercase tracking-widest mb-4">
                            Careers
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/careers" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Open Roles</Link></li>
                            <li><Link href="/careers" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Culture</Link></li>
                            <li><Link href="/blog" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Engineering Blog</Link></li>
                            <li><Link href="/contact" className="text-sm text-charcoal/50 hover:text-saffron-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-saffron-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-8">
                        <Link href="/suppliers" className="text-xs text-charcoal/30 hover:text-saffron-gold/70 transition-colors uppercase tracking-widest">
                            Suppliers
                        </Link>
                        <Link href="/updates" className="text-xs text-charcoal/30 hover:text-saffron-gold/70 transition-colors uppercase tracking-widest">
                            Updates
                        </Link>
                        <Link href="/privacy" className="text-xs text-charcoal/30 hover:text-saffron-gold/70 transition-colors uppercase tracking-widest">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-xs text-charcoal/30 hover:text-saffron-gold/70 transition-colors uppercase tracking-widest">
                            Terms
                        </Link>
                    </div>
                    <span className="text-xs text-charcoal/30 tracking-wide">
                        © 2026 Intensity Space Exploration Pvt.Ltd. Bengaluru, India
                    </span>
                </div>
            </div>
        </footer>
    );
}
