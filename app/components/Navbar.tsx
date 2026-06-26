"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Mail, Moon, Sun, Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { personal } from "../lib/data";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack",    href: "#stack" },
  { label: "Connect",  href: "#connect" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconStyle = {
    color: "var(--text-muted)" as const,
    transition: "color 0.2s",
    display: "flex",
    alignItems: "center" as const,
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled
          ? theme === "dark" ? "rgba(10,10,10,0.92)" : "rgba(248,248,246,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        <a href="#home" className="font-display"
          style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", textDecoration: "none", letterSpacing: "-0.02em" }}>
          PM<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <GitHubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <LinkedInIcon size={18} />
          </a>
          <a href={`mailto:${personal.email}`} style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <Mail size={18} />
          </a>

          <button onClick={toggle}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px",
              padding: "6px 8px", cursor: "pointer", color: "var(--text-muted)",
              display: "flex", alignItems: "center", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.color = "var(--text-muted)"; }}
            aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "none", alignItems: "center" }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text)", textDecoration: "none", fontWeight: 500 }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}