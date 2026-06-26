"use client";

import { useState, useRef } from "react";
import { personal } from "../lib/data";
import { MapPin, Mail, Phone, Pencil, Check, X, Camera } from "lucide-react";
import { useEdit } from "./EditContext";

type EditableField = "email" | "phone" | "bio";

interface ProfileData {
  email: string;
  phone: string;
  bio: string;
  profileImage: string;
}

export default function About() {
  const { isEditMode } = useEdit();
  const [profile, setProfile] = useState<ProfileData>({
    email: personal.email,
    phone: personal.phone,
    bio: personal.bio,
    profileImage: personal.profileImage,
  });

  const [editing, setEditing] = useState<EditableField | null>(null);
  const [draft, setDraft] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const startEdit = (field: EditableField) => {
    setEditing(field);
    setDraft(profile[field]);
  };

  const saveEdit = () => {
    if (!editing) return;
    setProfile((prev) => ({ ...prev, [editing]: draft }));
    setEditing(null);
  };

  const cancelEdit = () => setEditing(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfile((prev) => ({ ...prev, profileImage: url }));
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "64px", alignItems: "start" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <div style={{ position: "relative", width: "fit-content" }}>
              <div style={{
                width: "200px", height: "200px", borderRadius: "16px",
                overflow: "hidden", border: "2px solid var(--border)", background: "var(--bg-card)",
              }}>
                {profile.profileImage && profile.profileImage !== "/images/profile.jpg" ? (
                  <img src={profile.profileImage} alt={personal.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{
                    width: "100%", height: "100%", display: "flex",
                    alignItems: "center", justifyContent: "center", background: "var(--accent-dim)",
                  }}>
                    <span className="font-display" style={{ fontSize: "4rem", fontWeight: 800, color: "var(--accent)" }}>
                      PM
                    </span>
                  </div>
                )}
              </div>

              {isEditMode && (
                <button onClick={() => fileRef.current?.click()} title="Upload profile photo"
                  style={{
                    position: "absolute", bottom: "8px", right: "8px",
                    background: "var(--accent)", color: "#000", border: "none",
                    borderRadius: "8px", width: "32px", height: "32px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}>
                  <Camera size={14} />
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                <MapPin size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span>{personal.location}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
                <Mail size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {editing === "email" ? (
                  <div style={{ display: "flex", gap: "6px", flex: 1 }}>
                    <input className="field" style={{ fontSize: "0.85rem", padding: "4px 8px" }}
                      value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
                    <button onClick={saveEdit} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)" }}><Check size={14} /></button>
                    <button onClick={cancelEdit} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}><X size={14} /></button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
                    <a href={`mailto:${profile.email}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {profile.email}
                    </a>
                    {isEditMode && (
                      <button onClick={() => startEdit("email")}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--border)", padding: 0 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--border)")}>
                        <Pencil size={12} />
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
                <Phone size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {editing === "phone" ? (
                  <div style={{ display: "flex", gap: "6px", flex: 1 }}>
                    <input className="field" style={{ fontSize: "0.85rem", padding: "4px 8px" }}
                      value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
                    <button onClick={saveEdit} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)" }}><Check size={14} /></button>
                    <button onClick={cancelEdit} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}><X size={14} /></button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
                    <a href={`tel:${profile.phone}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {profile.phone}
                    </a>
                    {isEditMode && (
                      <button onClick={() => startEdit("phone")}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--border)", padding: 0 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--border)")}>
                        <Pencil size={12} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono accent" style={{ fontSize: "0.8rem", marginBottom: "12px", letterSpacing: "0.05em" }}>
              // About me
            </p>
            <h2 className="font-display"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
              Building things that<br />
              <span style={{ color: "var(--accent)" }}>actually matter.</span>
            </h2>

            {editing === "bio" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <textarea className="field" rows={6} value={draft}
                  onChange={(e) => setDraft(e.target.value)} autoFocus style={{ resize: "vertical", lineHeight: 1.7 }} />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={saveEdit}
                    style={{ background: "var(--accent)", color: "#000", border: "none", borderRadius: "6px", padding: "6px 16px", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem" }}>
                    Save
                  </button>
                  <button onClick={cancelEdit}
                    style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: "6px", padding: "6px 16px", cursor: "pointer", fontSize: "0.85rem" }}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem", paddingRight: isEditMode ? "28px" : "0" }}>
                  {profile.bio}
                </p>
                {isEditMode && (
                  <button onClick={() => startEdit("bio")} title="Edit bio"
                    style={{ position: "absolute", top: 0, right: 0, background: "none", border: "none", cursor: "pointer", color: "var(--border)", padding: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--border)")}>
                    <Pencil size={14} />
                  </button>
                )}
              </div>
            )}

            <div style={{ display: "flex", gap: "32px", marginTop: "40px" }}>
              {[
                { value: "4+", label: "Projects built" },
                { value: "8+", label: "Technologies" },
                { value: "ZA", label: "Based in SA" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display accent" style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}