"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Briefcase, Layers, Mail } from "lucide-react";

const navItems = [
  { id: "hero", href: "#hero", Icon: Home },
  { id: "work", href: "#work", Icon: Briefcase },
  { id: "services", href: "#services", Icon: Layers },
  { id: "contact", href: "#contact", Icon: Mail },
];

export default function SideNav() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(item.id);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -40% 0px", threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string, href: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update the URL hash without causing a page jump
      if (window && window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden flex-col gap-3 md:flex">
      {navItems.map(({ href, Icon, id }) => (
        <a
          key={id}
          href={href}
          onClick={(e) => handleNavClick(e, id, href)}
          className={`side-btn ${active === id ? "active" : ""}`}
          aria-label={id}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </nav>
  );
}
