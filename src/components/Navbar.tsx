"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Vehicle", href: "/vehicle" },
    { label: "Company", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isTransparent = isHome && !isScrolled;

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
                    {navItems.slice(0, 3).map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`px-5 py-2 text-xs font-heading font-black tracking-[0.2em] uppercase transition-colors duration-300 rounded-full ${isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-black hover:bg-black/10"
                                }`}
                        >
                            {item.label}
                        </Link>
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
