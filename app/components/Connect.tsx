"use client";

import { useState } from "react";
import { personal } from "../lib/data";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

type FormState = { name: string; email: string; message: string };
type SendMode  = "whatsapp" | "email" | "both";

export default function Connect() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [mode, setMode] = useState<SendMode>("both");

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const sendMessage = () => {
    if (!form.name || !form.message) return;
    const text = `Hi Phiwakonke! 👋\n\nMy name is ${form.name}${form.email ? ` (${form.email})` : ""}.\n\n${form.message}`;

    if (mode === "whatsapp" || mode === "both")
      window.open(`https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

    if (mode === "email" || mode === "both")
      window.open(`mailto:${personal.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(text)}`, "_blank");
  };

  const modeBtn = (value: SendMode, label: string, icon: React.ReactNode) => (
    <button onClick={() => setMode(value)}
      style={{
        display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px",
        border: `1px solid ${mode === value ? "var(--accent)" : "var(--border)"}`,
        background: mode === value ? "var(--accent-dim)" : "var(--bg-card)",
        color: mode === value ? "var(--accent)" : "var(--text-muted)",
        fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s ease",
      }}>
      {icon}{label}
    </button>
  );

  const contactLinks = [
    { icon: <Mail size={16} />,       label: personal.email,             href: `mailto:${personal.email}` },
    { icon: <Phone size={16} />,      label: personal.phone,             href: `tel:${personal.phone}` },
    { icon: <GitHubIcon size={16} />, label: "github.com/phiwakonkem",   href: personal.github },
    { icon: <LinkedInIcon size={16} />, label: "LinkedIn",               href: personal.linkedin },
  ];

  return (
    <section id="connect" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          <div>
            <p className="font-mono accent" style={{ fontSize: "0.8rem", marginBottom: "12px", letterSpacing: "0.05em" }}>
              // Let's connect
            </p>
            <h2 className="font-display"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "20px" }}>
              Got a project in mind?<br />
              <span style={{ color: "var(--accent)" }}>Let's talk.</span>
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "380px" }}>
              Whether it's a freelance project,a job opportunity,or just a conversation about software,and/or web dev,my inbox is open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {contactLinks.map((item) => (
                <a key={item.href} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 500 }}>Your name</label>
                <input className="field" type="text" placeholder="e.g. Lionel Messi" value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 500 }}>
                  Email <span style={{ fontWeight: 400 }}>(optional)</span>
                </label>
                <input className="field" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 500 }}>Message</label>
                <textarea className="field" rows={5} placeholder="Tell me about your project, opportunity, or just say hello..." value={form.message} onChange={update("message")} style={{ resize: "vertical" }} />
              </div>

              <div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "10px", fontWeight: 500 }}>Send via</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {modeBtn("whatsapp", "WhatsApp", <MessageCircle size={14} />)}
                  {modeBtn("email",    "Email",    <Mail size={14} />)}
                  {modeBtn("both",     "Both",     <Send size={14} />)}
                </div>
              </div>

              <button onClick={sendMessage} disabled={!form.name || !form.message}
                style={{
                  background: "var(--accent)", color: "#000", border: "none", borderRadius: "8px",
                  padding: "13px", fontWeight: 700, fontSize: "0.95rem",
                  cursor: form.name && form.message ? "pointer" : "not-allowed",
                  opacity: form.name && form.message ? 1 : 0.4,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  transition: "opacity 0.2s", fontFamily: "'DM Sans', sans-serif",
                }}>
                <Send size={15} /> Send message
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #connect .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}