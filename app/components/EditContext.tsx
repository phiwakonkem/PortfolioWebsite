"use client";

import { createContext, useContext, useState, useEffect } from "react";

const OWNER_PIN = process.env.NEXT_PUBLIC_OWNER_PIN ?? "";

interface EditContextType {
  isEditMode: boolean;
  showPinModal: boolean;
  openPinModal: () => void;
  closePinModal: () => void;
  attemptUnlock: (pin: string) => boolean;
  lock: () => void;
}

const EditContext = createContext<EditContextType>({
  isEditMode: false,
  showPinModal: false,
  openPinModal: () => {},
  closePinModal: () => {},
  attemptUnlock: () => false,
  lock: () => {},
});

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("pm_edit_mode");
    if (stored === "true") setIsEditMode(true);
  }, []);

  const openPinModal = () => setShowPinModal(true);
  const closePinModal = () => setShowPinModal(false);

  const attemptUnlock = (pin: string): boolean => {
    if (pin === OWNER_PIN) {
      setIsEditMode(true);
      sessionStorage.setItem("pm_edit_mode", "true");
      setShowPinModal(false);
      return true;
    }
    return false;
  };

  const lock = () => {
    setIsEditMode(false);
    sessionStorage.removeItem("pm_edit_mode");
  };

  return (
    <EditContext.Provider value={{ isEditMode, showPinModal, openPinModal, closePinModal, attemptUnlock, lock }}>
      {children}
      {showPinModal && <PinModal />}
    </EditContext.Provider>
  );
}

export const useEdit = () => useContext(EditContext);

function PinModal() {
  const { closePinModal, attemptUnlock } = useEdit();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    const success = attemptUnlock(pin);
    if (!success) {
      setError(true);
      setShake(true);
      setPin("");
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") closePinModal();
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) closePinModal(); }}
    >
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "40px 32px",
          width: "100%",
          maxWidth: "360px",
          animation: shake ? "shake 0.4s ease" : undefined,
        }}
      >
        <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
          Owner access
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "24px" }}>
          Enter your PIN to enable edit mode.
        </p>

        <input
          type="password"
          inputMode="numeric"
          maxLength={6}
          className="field"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => { setPin(e.target.value); setError(false); }}
          onKeyDown={handleKey}
          autoFocus
          style={{ textAlign: "center", letterSpacing: "0.3em", fontSize: "1.2rem" }}
        />

        {error && (
          <p style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: "8px", textAlign: "center" }}>
            Incorrect PIN. Try again.
          </p>
        )}

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button onClick={closePinModal}
            style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid var(--border)", background: "none", color: "var(--text-muted)", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            Cancel
          </button>
          <button onClick={handleSubmit}
            style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "none", background: "var(--accent)", color: "#000", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            Unlock
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}