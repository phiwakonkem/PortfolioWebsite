"use client";

import { personal } from "../lib/data";
import { Mail, Phone, Lock } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { useEdit } from "./EditContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { openPinModal, isEditMode } = useEdit();

  const links = [
    { href: personal.github,            icon: <GitHubIcon size={17} />,   label: "GitHub" },
    { href: personal.linkedin,          icon: <LinkedInIcon size={17} />, label: "LinkedIn" },
    { href: `mailto:${personal.email}`, icon: <Mail size={17} />,         label: "Email" },
    { href: `tel:${personal.phone}`,    icon: <Phone size={17} />,        label: "Phone" },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 0", background: "var(--bg)" }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}
      >
        <div>
          <span className="font-display" style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em" }}>
            PM<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>
            © {year} Phiwakonke Mthethwa. Built with Next.js & love.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {links.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                style={{ color: "var(--text-muted)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item.icon}
              </a>
            );
          })}

          {!isEditMode && (
            <button
              onClick={openPinModal}
              title="Owner login"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--border)", padding: "4px",
                display: "flex", alignItems: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--border)")}
            >
              <Lock size={13} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}