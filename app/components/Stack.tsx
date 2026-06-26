"use client";

import { stack } from "../lib/data";

export default function Stack() {
  return (
    <section id="stack" className="section" style={{ background: "var(--bg-card)" }}>
      <div className="container">
        <p className="font-mono accent" style={{ fontSize: "0.8rem", marginBottom: "12px", letterSpacing: "0.05em" }}>
          // tech stack
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          What I work with.
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "56px", maxWidth: "480px" }}>
          A mix of battle-tested tools and things I picked up because a project demanded it.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {Object.entries(stack).map(([category, items]) => (
            <div key={category}>
              <h3
                className="font-display"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {category}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "10px",
                }}
              >
                {items.map((item) => (
                  <div key={item.name} className="skill-card">
                    <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                    <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}