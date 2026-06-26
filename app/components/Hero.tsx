"use client";

import { useEffect, useState } from "react";
import { personal } from "../lib/data";
import { ArrowDown } from "lucide-react";

function AnimatedName({ name }: { name: string }) {
  const letters = name.split("");
  return (
    <span className="name-underline">
      {letters.map((char, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ animationDelay: `${0.04 * i}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 80px",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,200,150,0.04) 0%, transparent 60%),
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "auto, 60px 60px, 60px 60px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="fade-up font-mono"
          style={{
            animationDelay: "0s",
            color: "var(--accent)",
            fontSize: "0.85rem",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ opacity: 0.5 }}>$</span>
          <span>WhoAmI</span>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "16px",
              background: "var(--accent)",
              marginLeft: "2px",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          <AnimatedName name={personal.name} />
        </h1>

        <div
          className="fade-up font-display"
          style={{
            animationDelay: "1.2s",
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            fontWeight: 600,
            color: "var(--text-muted)",
            marginBottom: "24px",
            letterSpacing: "-0.01em",
          }}
        >
          {personal.title}
          <span style={{ color: "var(--accent)", marginLeft: "8px" }}>—</span>
          <span style={{ fontSize: "0.75em", marginLeft: "8px" }}>{personal.location}</span>
        </div>

        <p
          className="fade-up"
          style={{
            animationDelay: "1.4s",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {personal.tagline}
        </p>

        <div
          className="fade-up"
          style={{
            animationDelay: "1.6s",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              background: "var(--accent)",
              color: "#000",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Please view my work.
          </a>
          <a
            href="#connect"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "0.95rem",
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            Let's connect.
          </a>
        </div>

        <div
          className="fade-up"
          style={{
            animationDelay: "2s",
            position: "absolute",
            bottom: "-60px",
            left: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
          }}
        >
          <ArrowDown size={14} style={{ animation: "bounce 2s infinite" }} />
          <span className="font-mono">scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
}