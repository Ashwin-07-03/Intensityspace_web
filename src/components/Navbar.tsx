"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF8]/90 backdrop-blur-xl border-b border-amber-900/5">
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
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-heading font-bold tracking-tight uppercase text-amber-950">
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
                                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${link.hasDropdown && isCompanyOpen
                                                ? "bg-sky-50 text-sky-600"
                                                : "text-amber-900/60 hover:text-amber-950 hover:bg-amber-950/[0.03]"
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full text-amber-900/60 hover:text-amber-950 hover:bg-amber-950/[0.03]"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu for Company */}
                                {link.hasDropdown && isCompanyOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                                        <div className="bg-[#FFFDF8] rounded-3xl shadow-[0_20px_70px_-15px_rgba(14,165,233,0.25)] border border-sky-100/50 p-6 min-w-[540px] grid grid-cols-3 gap-6 overflow-hidden">
                                            {/* Gradient Accent */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 rounded-t-3xl" />

                                            {/* Company Section */}
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-3 px-3">
                                                    Company
                                                </h4>
                                                <div className="space-y-1">
                                                    {companyMenuItems.company.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-2.5 rounded-xl hover:bg-sky-50 transition-colors group"
                                                        >
                                                            <span className="text-sm font-semibold text-amber-950 group-hover:text-sky-600 transition-colors">
                                                                {item.name}
                                                            </span>
                                                            <p className="text-xs text-amber-900/40 mt-0.5">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Working at Intensity Space Section */}
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-3 px-3">
                                                    Working Here
                                                </h4>
                                                <div className="space-y-1">
                                                    {companyMenuItems.careers.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-2.5 rounded-xl hover:bg-sky-50 transition-colors group"
                                                        >
                                                            <span className="text-sm font-semibold text-amber-950 group-hover:text-sky-600 transition-colors">
                                                                {item.name}
                                                            </span>
                                                            <p className="text-xs text-amber-900/40 mt-0.5">
                                                                {item.description}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* About Us Card */}
                                            <div className="bg-gradient-to-br from-sky-400 via-cyan-500 to-sky-600 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                                                {/* Decorative circles */}
                                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/15 rounded-full blur-xl" />
                                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/15 rounded-full blur-lg" />

                                                <span className="inline-block px-3 py-1 text-[10px] font-bold text-white/90 bg-white/20 backdrop-blur-sm rounded-full w-fit uppercase tracking-wider">
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
                            className="px-4 py-2 text-sm font-medium text-amber-900/60 hover:text-amber-950 transition-colors rounded-full hover:bg-amber-950/[0.03]"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-xl hover:bg-amber-950/[0.03] transition-colors">
                        <div className="w-5 h-0.5 bg-amber-950 mb-1"></div>
                        <div className="w-5 h-0.5 bg-amber-950 mb-1"></div>
                        <div className="w-3 h-0.5 bg-amber-950"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
