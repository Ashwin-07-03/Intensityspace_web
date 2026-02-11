"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navItems = [
    {
        label: "Vehicle",
        href: "",
        subItems: [
            { label: "Intensity-1", href: "/vehicle" },
            { label: "Specifications", href: "/vehicle#specs" },
            { label: "Propulsion", href: "/vehicle#propulsion" },
            { label: "Suppliers", href: "/suppliers" },
        ]
    },
    {
        label: "Company",
        href: "",
        subItems: [
            { label: "About Us", href: "/about" },
            { label: "Mission Profiles", href: "/mission" },
            { label: "Team", href: "/team" },
            { label: "Updates", href: "/updates" },
        ]
    },
    {
        label: "Careers",
        href: "",
        subItems: [
            { label: "Open Roles", href: "/careers" },
            { label: "Culture", href: "/careers#culture" },
            { label: "Engineering Blog", href: "/blog" },
        ]
    },
];

interface NavbarProps {
    dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showBackground = isScrolled;

    return (
        <div className="fixed top-0 left-0 w-full z-[100] transform-gpu px-4 pt-6">
            <nav
                className={`mx-auto max-w-[1000px] h-[70px] rounded-2xl border transition-all duration-500 will-change-[background-color,backdrop-filter,border-color,box-shadow] flex items-center justify-between px-8 relative ${showBackground
                    ? "bg-white/90 border-saffron-gold/15 shadow-2xl backdrop-blur-3xl"
                    : "bg-white/60 border-charcoal/5 backdrop-blur-xl"
                    }`}
            >
                {/* Subtle rangoli dot pattern at bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] flex items-center justify-center">
                    <div className="flex gap-3">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-[2px] h-[2px] rounded-full bg-saffron-gold/20"
                            />
                        ))}
                    </div>
                </div>

                {/* Logo Left */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group shrink-0"
                >
                    <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Intensity"
                            fill
                            className="object-contain brightness-0"
                        />
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-base font-sans font-black tracking-widest uppercase text-charcoal">
                            Intensity
                        </span>
                    </div>
                </Link>

                {/* Navigation Items Center */}
                <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative py-4"
                            onMouseEnter={() => setHoveredItem(item.label)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="px-5 py-2 text-[10px] md:text-xs font-sans font-black tracking-[0.2em] uppercase transition-colors duration-300 rounded-full flex items-center gap-1 text-charcoal hover:text-saffron-gold hover:bg-saffron-gold/5"
                                >
                                    {item.label}
                                    {item.subItems && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>
                            ) : (
                                <div
                                    className="px-5 py-2 text-[10px] md:text-xs font-sans font-black tracking-[0.2em] uppercase transition-colors duration-300 rounded-full flex items-center gap-1 cursor-default text-charcoal hover:text-saffron-gold hover:bg-saffron-gold/5"
                                >
                                    {item.label}
                                    {item.subItems && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />
                                    )}
                                </div>
                            )}

                            <AnimatePresence>
                                {hoveredItem === item.label && item.subItems && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 min-w-[200px]"
                                    >
                                        <div className="rounded-xl border shadow-2xl backdrop-blur-3xl overflow-hidden bg-white/95 border-saffron-gold/10">
                                            <div className="py-2">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="block px-5 py-3 text-[9px] font-sans font-black tracking-[0.2em] uppercase transition-colors text-charcoal/50 hover:text-saffron-gold hover:bg-saffron-gold/5"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Action Button Right */}
                <Link
                    href="/contact"
                    className="hidden md:flex items-center px-6 py-2 rounded-full text-[10px] font-sans font-black tracking-widest uppercase transition-all duration-300 bg-charcoal text-white hover:bg-saffron-gold hover:text-charcoal"
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
}
