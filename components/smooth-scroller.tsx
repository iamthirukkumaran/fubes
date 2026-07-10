"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function ScrollLinkHandler() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const onClick = (e: Event) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const anchor = target.closest("a") as HTMLAnchorElement | null;
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id);

            // default per-section offsets (px)
            const sectionOffsets: Record<string, number> = {
                hero: 140,
                work: 120,
                services: 100,
                contact: 90,
            };

            if (el) {
                const dataOffset = el.getAttribute("data-offset");
                const offset = dataOffset ? parseInt(dataOffset, 10) : sectionOffsets[id] ?? 100;

                // scroll to element with header offset using Lenis duration
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                lenis.scrollTo(top, { immediate: false, duration: 1.0 });
                // update URL hash without jump
                if (window && window.history && window.history.pushState) {
                    window.history.pushState(null, "", href);
                }
            }
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [lenis]);

    return null;
}

// easeInOutCubic
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function SmoothScroller({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.0, easing: easeInOutCubic, smoothWheel: true }}>
            <ScrollLinkHandler />
            {children}
        </ReactLenis>
    );
}
