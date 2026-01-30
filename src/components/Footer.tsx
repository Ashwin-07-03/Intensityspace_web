import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-amber-950 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="Intensity Space"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-sm font-heading font-bold tracking-tight uppercase">
                                Intensity Space
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm">
                            Pioneering the future of orbital launches and space transportation.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/mission" className="text-sm text-white/60 hover:text-white transition-colors">Mission</Link></li>
                            <li><Link href="/team" className="text-sm text-white/60 hover:text-white transition-colors">Team</Link></li>
                            <li><Link href="/updates" className="text-sm text-white/60 hover:text-white transition-colors">Updates</Link></li>
                        </ul>
                    </div>

                    {/* Vehicle & Services */}
                    <div>
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                            Vehicle
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/vehicle" className="text-sm text-white/60 hover:text-white transition-colors">Intensity-1</Link></li>
                            <li><Link href="/vehicle" className="text-sm text-white/60 hover:text-white transition-colors">Specifications</Link></li>
                            <li><Link href="/vehicle" className="text-sm text-white/60 hover:text-white transition-colors">Propulsion</Link></li>
                            <li><Link href="/suppliers" className="text-sm text-white/60 hover:text-white transition-colors">Suppliers</Link></li>
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                            Careers
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/careers" className="text-sm text-white/60 hover:text-white transition-colors">Open Roles</Link></li>
                            <li><Link href="/careers" className="text-sm text-white/60 hover:text-white transition-colors">Culture</Link></li>
                            <li><Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">Engineering Blog</Link></li>
                            <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-8">
                        <Link href="/suppliers" className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">
                            Suppliers
                        </Link>
                        <Link href="/updates" className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">
                            Updates
                        </Link>
                        <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">
                            Terms
                        </Link>
                    </div>
                    <span className="text-xs text-white/40 tracking-wide">
                        © 2026 Intensity Space. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
