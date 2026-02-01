"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

/**
 * High-performance smooth scrolling provider using Lenis.
 * Syncs with the browser's refresh rate to ensure a consistent 60fps+ experience.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,         // Smoothness factor (0.1 is standard cinematic)
                duration: 1.5,     // Duration of the scroll animation
                smoothWheel: true,
                wheelMultiplier: 1.1,
                touchMultiplier: 2,
                infinite: false,
            }}
        >
            {children}
        </ReactLenis>
    );
}
