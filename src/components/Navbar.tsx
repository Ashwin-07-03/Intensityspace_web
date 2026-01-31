"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Company dropdown menu items
const companyMenuItems = {
    company: [
        { name: "About Us", description: "Get to know us", href: "/about" },
        { name: "Mission", description: "Our vision for space", href: "/mission" },
        { name: "Team", description: "Meet our engineers", href: "/team" },
    ],
    careers: [
        { name: "Careers & Culture", description: "Life at Intensity Space", href: "/careers" },
        { name: "Open Roles", description: "Explore opportunities", href: "/careers" },
        { name: "Engineering Blog", description: "Insights from our team", href: "/blog" },
    ],
};

const navLinks = [
    { name: "Vehicle", href: "/vehicle" },
    { name: "Company", href: "#", hasDropdown: true, isStatic: true },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    // Dark mode (white text) is active on home page when not scrolled
    const isDark = isHome && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textColorClass = isDark ? "text-white" : "text-black";
    const mutedTextColorClass = isDark ? "text-white/70" : "text-black/60";
    const hoverBgClass = isDark ? "hover:bg-white/10" : "hover:bg-black/5";
    const activeBgClass = isDark ? "bg-white/10" : "bg-black/5";
    const logoFilterClass = isDark ? "brightness-0 invert" : "brightness-0";
    const bgClass = isScrolled ? "bg-[#F9F9F9]/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Intensity Space"
                                fill
                                priority
                                className={`object-contain ${logoFilterClass}`}
                            />
                        </div>
                        <span className={`text-xl font-heading font-black tracking-tight uppercase ${textColorClass}`}>
                            Intensity Space
                        </span>
                    </Link>

                    {/* Navigation Links - Centered */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setIsCompanyOpen(true)}
                                onMouseLeave={() => link.hasDropdown && setIsCompanyOpen(false)}
                            >
                                {link.isStatic ? (
                                    <button
                                        className={`px-4 py-2 text-xs font-heading font-black tracking-[0.2em] uppercase transition-all duration-200 rounded-full ${link.hasDropdown && isCompanyOpen
                                            ? activeBgClass + " " + textColorClass
                                            : mutedTextColorClass + " " + hoverBgClass
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`px-4 py-2 text-xs font-heading font-black tracking-[0.2em] uppercase transition-all duration-200 rounded-full ${mutedTextColorClass} ${hoverBgClass}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu for Company */}
                                {link.hasDropdown && isCompanyOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                                        <div className="bg-[#F9F9F9] rounded-none shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] border border-black/5 p-6 min-w-[540px] grid grid-cols-3 gap-6 overflow-hidden">
                                            {/* Top Accent Line */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-black" />

                                            {/* Company Section */}
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-3 px-3">
                                                    Company
                                                </h4>
                                                <div className="space-y-1">
                                                    {companyMenuItems.company.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-2.5 rounded-none hover:bg-black/5 transition-colors group"
                                                        >
                                                            <span className="text-sm font-semibold text-black group-hover:text-black/60 transition-colors">
                                                                {item.name}
                                                            </span>
                                                            <p className="text-xs text-black/40 mt-0.5">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Working at Intensity Space Section */}
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-3 px-3">
                                                    Working Here
                                                </h4>
                                                <div className="space-y-1">
                                                    {companyMenuItems.careers.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-2.5 rounded-none hover:bg-black/5 transition-colors group"
                                                        >
                                                            <span className="text-sm font-semibold text-black group-hover:text-black/60 transition-colors">
                                                                {item.name}
                                                            </span>
                                                            <p className="text-xs text-black/40 mt-0.5">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* About Us Card */}
                                            <div className="bg-black rounded-none p-5 flex flex-col justify-between relative overflow-hidden">
                                                {/* Decorative circles */}
                                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg" />

                                                <span className="inline-block px-3 py-1 text-[10px] font-bold text-white/90 bg-white/10 backdrop-blur-sm rounded-none w-fit uppercase tracking-wider">
                                                    About Us
                                                </span>
                                                <div className="mt-4 relative z-10">
                                                    <p className="text-white/95 text-sm leading-relaxed">
                                                        Pioneering orbital launches with cutting-edge propulsion.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Contact Only */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/contact"
                            className={`px-4 py-2 text-xs font-heading font-black tracking-[0.2em] uppercase ${mutedTextColorClass} hover:${textColorClass} transition-colors rounded-full ${hoverBgClass}`}
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={`md:hidden p-2 rounded-none ${hoverBgClass} transition-colors`}>
                        <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} mb-1`}></div>
                        <div className={`w-5 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} mb-1`}></div>
                        <div className={`w-3 h-0.5 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
