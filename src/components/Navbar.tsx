"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

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
    const [mounted, setMounted] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setMobileOpen(false);
        setMobileExpanded(null);
    }, [pathname]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const showBackground = mounted && isScrolled;

    return (
        <div className="fixed top-0 left-0 w-full z-[100] transform-gpu" suppressHydrationWarning>
            <nav
                suppressHydrationWarning
                className={`w-full h-[70px] border-b transition-all duration-500 flex items-center justify-between px-6 md:px-12 relative ${showBackground
                    ? "bg-white/90 border-saffron-gold/15 shadow-md backdrop-blur-lg"
                    : "bg-white/70 border-black/5 backdrop-blur-sm"
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

                {/* Desktop Navigation Items Center */}
                <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
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

                {/* Desktop Action Button Right */}
                <Link
                    href="/contact"
                    className="hidden md:flex items-center px-6 py-2 rounded-full text-[10px] font-sans font-black tracking-widest uppercase transition-all duration-300 bg-charcoal text-white hover:bg-saffron-gold hover:text-charcoal"
                >
                    Contact
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-charcoal hover:bg-saffron-gold/10 transition-colors duration-200"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 top-[70px] bg-charcoal/20 backdrop-blur-sm z-[90]"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute top-[70px] left-0 right-0 bg-white border-b border-saffron-gold/10 shadow-2xl z-[95] overflow-y-auto max-h-[calc(100vh-70px)]"
                        >
                            <div className="px-6 py-4">
                                {navItems.map((item, idx) => (
                                    <div key={item.label} className={idx !== 0 ? "border-t border-charcoal/5" : ""}>
                                        {/* Parent row */}
                                        <button
                                            className="w-full flex items-center justify-between py-4 text-left"
                                            onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                        >
                                            <span className="text-xs font-sans font-black tracking-[0.25em] uppercase text-charcoal">
                                                {item.label}
                                            </span>
                                            {item.subItems && (
                                                <ChevronDown className={`w-4 h-4 text-charcoal/40 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                                            )}
                                        </button>

                                        {/* Sub-items */}
                                        <AnimatePresence>
                                            {mobileExpanded === item.label && item.subItems && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.22 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-3 pl-4 space-y-1">
                                                        {item.subItems.map(sub => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                className="block py-2.5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-charcoal/50 hover:text-saffron-gold transition-colors"
                                                                onClick={() => setMobileOpen(false)}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                {/* Contact CTA */}
                                <div className="border-t border-charcoal/5 pt-5 pb-4">
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full py-3.5 rounded-full text-xs font-sans font-black tracking-widest uppercase bg-charcoal text-white hover:bg-saffron-gold hover:text-charcoal transition-all duration-300"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
