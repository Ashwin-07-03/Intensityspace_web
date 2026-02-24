"use client";

import React from "react";

/**
 * MandalaPattern — Concentric sacred geometry SVG
 * Used as decorative background element behind headings
 */
export function MandalaPattern({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer ring of petals */}
            {Array.from({ length: 16 }).map((_, i) => (
                <ellipse
                    key={`outer-${i}`}
                    cx="200"
                    cy="120"
                    rx="18"
                    ry="60"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.3"
                    transform={`rotate(${i * 22.5} 200 200)`}
                />
            ))}
            {/* Middle ring */}
            {Array.from({ length: 12 }).map((_, i) => (
                <ellipse
                    key={`mid-${i}`}
                    cx="200"
                    cy="150"
                    rx="12"
                    ry="40"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    opacity="0.25"
                    transform={`rotate(${i * 30} 200 200)`}
                />
            ))}
            {/* Inner ring */}
            {Array.from({ length: 8 }).map((_, i) => (
                <ellipse
                    key={`inner-${i}`}
                    cx="200"
                    cy="170"
                    rx="8"
                    ry="24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.2"
                    transform={`rotate(${i * 45} 200 200)`}
                />
            ))}
            {/* Concentric circles */}
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
            <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            {/* Center dot */}
            <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

/**
 * FloralMandala — Detailed floral pattern like a marigold/lotus rangoli
 */
export function FloralMandala({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Marigold Petals */}
            {Array.from({ length: 32 }).map((_, i) => (
                <path
                    key={`outer-marigold-${i}`}
                    d="M250 250 Q230 100 250 50 Q270 100 250 250"
                    fill="currentColor"
                    opacity="0.1"
                    transform={`rotate(${i * 11.25} 250 250)`}
                />
            ))}

            {/* Mid Lotus Petals */}
            {Array.from({ length: 16 }).map((_, i) => (
                <path
                    key={`mid-lotus-${i}`}
                    d="M250 250 Q210 160 250 100 Q290 160 250 250"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.05"
                    opacity="0.2"
                    transform={`rotate(${i * 22.5} 250 250)`}
                />
            ))}

            {/* Inner layered petals */}
            {Array.from({ length: 12 }).map((_, i) => (
                <path
                    key={`inner-petal-${i}`}
                    d="M250 250 Q230 190 250 150 Q270 190 250 250"
                    fill="currentColor"
                    opacity="0.3"
                    transform={`rotate(${i * 30} 250 250)`}
                />
            ))}

            {/* Center pistil/details */}
            <circle cx="250" cy="250" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="250" cy="250" r="30" fill="currentColor" opacity="0.2" />
            <circle cx="250" cy="250" r="10" fill="currentColor" opacity="0.4" />
        </svg>
    );
}

/**
 * RangoliDivider — Horizontal section divider with kolam-inspired dots & lines
 */
export function RangoliDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center gap-2 py-4 ${className}`}>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-saffron-gold/30" />
            <svg viewBox="0 0 60 20" className="w-16 h-5" fill="currentColor" opacity="0.4">
                {/* Central diamond */}
                <polygon points="30,2 38,10 30,18 22,10" fill="none" stroke="currentColor" strokeWidth="0.8" />
                {/* Side dots */}
                <circle cx="14" cy="10" r="1.5" />
                <circle cx="8" cy="10" r="1" />
                <circle cx="46" cy="10" r="1.5" />
                <circle cx="52" cy="10" r="1" />
                {/* Corner dots on diamond */}
                <circle cx="30" cy="2" r="1.2" />
                <circle cx="30" cy="18" r="1.2" />
                <circle cx="22" cy="10" r="1.2" />
                <circle cx="38" cy="10" r="1.2" />
            </svg>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-saffron-gold/30" />
        </div>
    );
}

/**
 * LotusAccent — Small lotus motif for decorative accents
 */
export function LotusAccent({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Center petal (top) */}
            <ellipse cx="20" cy="14" rx="4" ry="10" fill="currentColor" opacity="0.3" />
            {/* Left petals */}
            <ellipse cx="20" cy="14" rx="4" ry="10" fill="currentColor" opacity="0.25" transform="rotate(-30 20 20)" />
            <ellipse cx="20" cy="14" rx="4" ry="10" fill="currentColor" opacity="0.2" transform="rotate(-60 20 20)" />
            {/* Right petals */}
            <ellipse cx="20" cy="14" rx="4" ry="10" fill="currentColor" opacity="0.25" transform="rotate(30 20 20)" />
            <ellipse cx="20" cy="14" rx="4" ry="10" fill="currentColor" opacity="0.2" transform="rotate(60 20 20)" />
            {/* Center */}
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.35" />
        </svg>
    );
}

/**
 * SacredGeometry — Sri Yantra inspired triangular pattern
 * Used as large background watermark
 */
export function SacredGeometry({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Upward triangles (Shiva) */}
            <polygon points="100,20 170,150 30,150" stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
            <polygon points="100,40 155,135 45,135" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
            <polygon points="100,55 145,125 55,125" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
            {/* Downward triangles (Shakti) */}
            <polygon points="100,180 30,50 170,50" stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
            <polygon points="100,165 40,60 160,60" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
            <polygon points="100,150 50,70 150,70" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
            {/* Bindu (center point) */}
            <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.2" />
            {/* Outer circle */}
            <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
        </svg>
    );
}

/**
 * GoldenParticles — Floating diya-like particles
 * Pure CSS animated dots that float upward like lamp embers
 * Uses deterministic values to avoid hydration mismatches.
 */
const PARTICLE_DATA = [
    { size: 3.2, left: 12, duration: 8.4, delay: 1.2 },
    { size: 4.1, left: 27, duration: 10.1, delay: 3.5 },
    { size: 2.5, left: 41, duration: 7.3, delay: 0.8 },
    { size: 3.8, left: 55, duration: 9.6, delay: 4.1 },
    { size: 2.9, left: 68, duration: 11.2, delay: 2.3 },
    { size: 4.5, left: 82, duration: 6.8, delay: 5.0 },
    { size: 3.0, left: 8, duration: 8.9, delay: 1.7 },
    { size: 3.6, left: 35, duration: 10.5, delay: 3.9 },
    { size: 2.3, left: 50, duration: 7.7, delay: 0.5 },
    { size: 4.0, left: 63, duration: 9.2, delay: 4.6 },
    { size: 3.4, left: 76, duration: 11.0, delay: 2.8 },
    { size: 2.7, left: 91, duration: 6.5, delay: 5.3 },
];

export function GoldenParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
            {PARTICLE_DATA.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-saffron-gold/40"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        bottom: `-10px`,
                        animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}


/**
 * FloatingPetals — Falling flower petal animation
 */
const PETAL_DATA = [
    { size: 12, left: 10, duration: 12, delay: 0 },
    { size: 18, left: 25, duration: 15, delay: 2 },
    { size: 14, left: 45, duration: 11, delay: 5 },
    { size: 16, left: 65, duration: 14, delay: 1 },
    { size: 20, left: 85, duration: 16, delay: 3 },
    { size: 10, left: 15, duration: 13, delay: 6 },
    { size: 15, left: 55, duration: 12, delay: 4 },
    { size: 12, left: 75, duration: 15, delay: 7 },
    { size: 22, left: 95, duration: 17, delay: 2.5 },
    { size: 16, left: 35, duration: 14, delay: 8 },
];

export function FloatingPetals() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
            {PETAL_DATA.map((p, i) => (
                <div
                    key={`petal-${i}`}
                    className="absolute text-saffron-gold/30"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        top: `-20px`,
                        animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
                    }}
                >
                    {/* SVG Petal shape */}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full drop-shadow-sm">
                        <path d="M10 0C10 0 0 5 0 10C0 15 5 20 10 20C15 20 20 15 20 10C20 5 10 0 10 0Z" />
                    </svg>
                </div>
            ))}
        </div>
    );
}
