"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useEdit } from "./EditContext";
import { Mail, Moon, Sun, Menu, X, Download, Lock, Unlock } from "lucide-react";
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
  const { isEditMode, openPinModal, lock } = useEdit();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    color: "var(--text-muted)" as const,
    textDecoration: "none" as const,
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "color 0.2s ease",
    display: "flex",
    alignItems: "center" as const,
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
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

        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <GitHubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <LinkedInIcon size={18} />
          </a>
          <a href={`mailto:${personal.email}`} style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            <Mail size={18} />
          </a>

          <a          
            href={personal.cvPath}
            download="PK_Mthethwa_CV.pdf"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "var(--accent)", color: "#000",
              padding: "7px 14px", borderRadius: "8px",
              fontWeight: 600, fontSize: "0.82rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            className="desktop-nav"
          >
            <Download size={13} />
            Download CV
          </a>

          <button onClick={toggle}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: "8px", padding: "6px 8px", cursor: "pointer",
              color: "var(--text-muted)", display: "flex", alignItems: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.color = "var(--text-muted)"; }}
            aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {isEditMode && (
            <button onClick={lock} title="Lock edit mode"
              style={{
                background: "rgba(0,200,150,0.15)", border: "1px solid var(--accent)",
                borderRadius: "8px", padding: "6px 8px", cursor: "pointer",
                color: "var(--accent)", display: "flex", alignItems: "center",
              }}>
              <Unlock size={14} />
            </button>
          )}

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
          <a href={personal.cvPath} download="PK_Mthethwa_CV.pdf"
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
            <Download size={14} /> Download CV
          </a>
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