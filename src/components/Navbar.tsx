"use client";

import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
    description?: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

const navItems: CardNavItem[] = [
    {
        label: "Vehicle",
        bgColor: "#ffffff",
        textColor: "#000000",
        links: [
            { label: "Overview", href: "/vehicle", ariaLabel: "Vehicle Overview", description: "Design architecture and orbital capabilities" },
            { label: "Launch Services", href: "/vehicle", ariaLabel: "Launch Services", description: "Payload deployment and mission profiles" },
            { label: "Tech Specs", href: "/vehicle", ariaLabel: "Technical Specifications", description: "Propulsion systems and mass statistics" },
        ],
    },
    {
        label: "Company",
        bgColor: "#0a0a0a",
        textColor: "#ffffff",
        links: [
            { label: "Our Mission", href: "/mission", ariaLabel: "Our Mission", description: "Our roadmap to orbital supremacy" },
            { label: "About Us", href: "/about", ariaLabel: "About Intensity Space", description: "Pioneering the next era of spaceflight" },
            { label: "The Team", href: "/team", ariaLabel: "Meet the Team", description: "Visionaries and engineers behind the craft" },
            { label: "Contact", href: "/contact", ariaLabel: "Contact Us", description: "Get in touch with our operations team" },
        ],
    },
    {
        label: "Careers",
        bgColor: "#ffffff",
        textColor: "#000000",
        links: [
            { label: "Culture", href: "/careers", ariaLabel: "Life at Intensity Space", description: "Join a culture of disruptive innovation" },
            { label: "Open Roles", href: "/careers", ariaLabel: "Explore Opportunities", description: "Help us build the future of launch" },
            { label: "Engineering Blog", href: "/blog", ariaLabel: "Engineering Blog", description: "Weekly updates from the lab" },
        ],
    },
];

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTabLabel, setActiveTabLabel] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    // Dynamic Theming Logic
    const isHome = pathname === "/";

    // Check if we are over the Hero section (home page only)
    const isOverHero = isHome && (typeof window !== "undefined" ? window.scrollY < window.innerHeight * 0.8 : true);
    const isTransparentAtTop = isHome && !isScrolled && !isExpanded;

    const navbarBgClass = isTransparentAtTop
        ? "bg-transparent border-transparent shadow-none backdrop-blur-none text-white transition-all duration-700"
        : (isOverHero
            ? "bg-white/80 text-black border-white/10 backdrop-blur-3xl"
            : "bg-black/90 text-white border-white/10 backdrop-blur-3xl");

    const logoFilterClass = isTransparentAtTop
        ? "brightness-0 invert"
        : (isOverHero ? "brightness-0" : "brightness-0 invert");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const calculateHeight = useCallback(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) return 520;
        return 420;
    }, []);

    useLayoutEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        gsap.set(navEl, { height: 70 });

        const tl = gsap.timeline({ paused: true });
        tl.to(navEl, {
            height: calculateHeight(),
            duration: 0.6,
            ease: "expo.out",
        });

        tlRef.current = tl;

        return () => {
            tl.kill();
        };
    }, [calculateHeight]);

    const handleMouseEnter = (label: string) => {
        setActiveTabLabel(label);
        if (!isExpanded) {
            setIsExpanded(true);
            tlRef.current?.play();
        }
    };

    const handleMouseLeaveNav = (e: React.MouseEvent) => {
        const relatedTarget = e.relatedTarget as Node;
        if (navRef.current && !navRef.current.contains(relatedTarget)) {
            closeMenu();
        }
    };

    const closeMenu = () => {
        tlRef.current?.reverse();
        tlRef.current?.eventCallback("onReverseComplete", () => {
            setIsExpanded(false);
            setActiveTabLabel(null);
        });
    };

    const activeItem = navItems.find(item => item.label === activeTabLabel);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1000px] z-[100] px-4">
            <nav
                ref={navRef}
                className={`w-full backdrop-blur-3xl border rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "bg-white text-black border-black/5" : navbarBgClass
                    }`}
                style={{ height: "70px" }}
                onMouseLeave={handleMouseLeaveNav}
            >
                {/* Top Bar */}
                <div className="flex items-center justify-between h-[70px] px-8 relative z-20">
                    {/* Logo Left */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group shrink-0"
                        onClick={closeMenu}
                    >
                        <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="Intensity Space"
                                fill
                                className={`object-contain transition-all duration-500 ${isExpanded ? "brightness-0" : logoFilterClass
                                    }`}
                            />
                        </div>
                        <span className={`text-base font-heading font-black tracking-tight uppercase transition-colors duration-500 hidden sm:block ${isExpanded ? "text-black" : ""
                            }`}>
                            Intensity Space
                        </span>
                    </Link>

                    {/* Navigation Items Center */}
                    <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                className={`px-5 py-2 text-xs font-heading font-black tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${activeTabLabel === item.label
                                    ? "bg-black text-white"
                                    : "hover:bg-current/10"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Action Button Right */}
                    <Link
                        href="/contact"
                        className={`hidden md:flex items-center px-6 py-2 rounded-full text-[10px] font-heading font-black tracking-widest uppercase transition-all duration-300 ${isExpanded ? "bg-black text-white hover:bg-black/80" : (isTransparentAtTop ? "bg-white text-black hover:bg-white/90" : (isOverHero ? "bg-black text-white" : "bg-white text-black"))
                            }`}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>

                {/* Isolated Content Card */}
                <div
                    className={`card-nav-content px-4 pb-4 pt-2 transition-opacity duration-300 ${isExpanded ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"
                        }`}
                >
                    {activeItem && (
                        <div
                            className="w-full h-[450px] md:h-[340px] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-stretch animate-in fade-in slide-in-from-top-4 duration-500 shadow-inner border border-black/5 overflow-hidden"
                            style={{ backgroundColor: activeItem.bgColor, color: activeItem.textColor }}
                        >
                            {/* Main Links Area */}
                            <div className="flex-[2] w-full flex flex-col">
                                <div className="flex items-end justify-between mb-8 border-b border-current/10 pb-4">
                                    <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-none">
                                        {activeItem.label}
                                    </h3>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 px-3 py-1 border border-current/20 rounded-full mb-1">
                                        Selection
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 scrollbar-hide">
                                    {activeItem.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="group relative flex flex-col gap-2 p-5 rounded-xl border border-current/5 bg-current/[0.03] hover:bg-current/[0.08] hover:border-current/20 transition-all duration-300"
                                            onClick={closeMenu}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-bold tracking-tight uppercase italic group-hover:translate-x-1 transition-transform">{link.label}</span>
                                                <div className="w-8 h-8 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-current group-hover:text-inverse transition-all">
                                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                                                </div>
                                            </div>
                                            {link.description && (
                                                <p className="text-[11px] opacity-40 font-medium tracking-wide leading-relaxed max-w-[90%]">{link.description}</p>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Section Featurette (Right Side) */}
                            <div className="hidden md:flex flex-1 flex-col bg-current/[0.03] rounded-xl border border-current/5 p-8 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-current/[0.02] rounded-full blur-3xl group-hover:bg-current/[0.05] transition-colors" />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="mb-auto">
                                        <div className="w-12 h-[2px] bg-current opacity-40 mb-6" />
                                        <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Technical Briefing</h4>
                                        <p className="text-xs opacity-60 leading-relaxed font-medium">
                                            Exploring the frontiers of orbital supremacy through disruptive aerospace engineering.
                                        </p>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                            <span className="text-[10px] uppercase font-black tracking-widest opacity-40">System Status: Active</span>
                                        </div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-20 mb-2">Intensity / {activeItem.label}</p>
                                        <p className="text-xs font-semibold opacity-70 italic leading-relaxed">"Pioneering the next era of access to space."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
