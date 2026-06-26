"use client";

import { projects } from "../lib/data";
import { GitHubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="font-mono accent" style={{ fontSize: "0.8rem", marginBottom: "12px", letterSpacing: "0.05em" }}>
          // Projects
        </p>
        <h2 className="font-display"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px" }}>
          Things I've built.
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "56px", maxWidth: "480px" }}>
          Real projects,real problems,real code. Each one taught me something.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "24px" }}>
          {projects.map((project) => (
            <article key={project.id} className="project-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div>
                  <h3 className="font-display"
                    style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "4px" }}>
                    {project.name}
                  </h3>
                  <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontStyle: "italic" }}>
                    {project.tagline}
                  </p>
                </div>
                <span className={`badge-${project.statusColor}`}
                  style={{ fontSize: "0.72rem", padding: "4px 10px", borderRadius: "20px", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0, marginLeft: "12px" }}>
                  {project.status}
                </span>
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "20px" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-pill">{tech}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.85rem", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "6px", padding: "6px 14px", transition: "border-color 0.2s, color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.color = "var(--text-muted)"; }}>
                  <GitHubIcon size={14} />
                  Source
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.85rem", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "6px", padding: "6px 14px", transition: "border-color 0.2s, color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.color = "var(--text-muted)"; }}>
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}