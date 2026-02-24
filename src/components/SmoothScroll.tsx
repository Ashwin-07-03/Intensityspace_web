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
                lerp: 0.09,        // Slightly snappier (was 0.1)
                duration: 1.1,     // Down from 1.5 — less "trailing" lag feeling
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.5,
                infinite: false,
                syncTouch: false,  // Prevents double-processing on touch devices
            }}
        >
            {children}
        </ReactLenis>
    );
}
