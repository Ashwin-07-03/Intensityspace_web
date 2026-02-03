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
        href: "/vehicle",
        subItems: [
            { label: "Intensity-1", href: "/vehicle" },
            { label: "Specifications", href: "/vehicle#specs" },
            { label: "Propulsion", href: "/vehicle#propulsion" },
            { label: "Suppliers", href: "/suppliers" },
        ]
    },
    {
        label: "Company",
        href: "/about",
        subItems: [
            { label: "About Us", href: "/about" },
            { label: "Mission Profiles", href: "/mission" },
            { label: "Team", href: "/team" },
            { label: "Updates", href: "/updates" },
        ]
    },
    {
        label: "Careers",
        href: "/careers",
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

    const isTransparent = (isHome || dark) && !isScrolled;

    return (
        <div className="fixed top-0 left-0 w-full z-[100] transform-gpu px-4 pt-6">
            <nav
                className={`mx-auto max-w-[1000px] h-[70px] rounded-2xl border transition-all duration-500 will-change-[background-color,backdrop-filter,border-color,box-shadow] flex items-center justify-between px-8 ${isTransparent
                    ? "bg-transparent border-transparent shadow-none"
                    : "bg-[#FAF9F6]/80 border-black/10 shadow-2xl backdrop-blur-3xl"
                    }`}
            >
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
                            className={`object-contain ${isTransparent ? "brightness-0 invert" : "brightness-0"}`}
                        />
                    </div>
                    <span className={`text-base font-heading font-black tracking-widest uppercase hidden sm:block ${isTransparent ? "text-white" : "text-black"}`}>
                        Intensity
                    </span>
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
                            <Link
                                href={item.href}
                                className={`px-5 py-2 text-[10px] md:text-xs font-heading font-black tracking-[0.2em] uppercase transition-colors duration-300 rounded-full flex items-center gap-1 ${isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-black hover:bg-black/10"
                                    }`}
                            >
                                {item.label}
                                {item.subItems && (
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            <AnimatePresence>
                                {hoveredItem === item.label && item.subItems && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 min-w-[200px]"
                                    >
                                        <div className={`rounded-xl border shadow-2xl backdrop-blur-3xl overflow-hidden ${isTransparent
                                                ? "bg-black/90 border-white/10"
                                                : "bg-white/95 border-black/10"
                                            }`}>
                                            <div className="py-2">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className={`block px-5 py-3 text-[9px] font-heading font-black tracking-[0.2em] uppercase transition-colors ${isTransparent
                                                                ? "text-white/60 hover:text-white hover:bg-white/10"
                                                                : "text-black/60 hover:text-black hover:bg-black/5"
                                                            }`}
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
                    className={`hidden md:flex items-center px-6 py-2 rounded-full text-[10px] font-heading font-black tracking-widest uppercase transition-all duration-300 ${isTransparent
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-black text-white hover:bg-black/80"
                        }`}
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
}

