import React, { useState } from "react";
import { BsTerminal } from "react-icons/bs";
import TerminalModal from "./TerminalModal";

function FloatingTerminalBtn() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowTerminal(true)}
        className="floating-terminal-btn"
        title="Open Interactive Developer Terminal & AI Assistant"
        aria-label="Open Developer Terminal"
      >
        <BsTerminal size={20} style={{ marginRight: "6px" }} />
        <span>Terminal &amp; AI Assist</span>
      </button>

      <TerminalModal
        show={showTerminal}
        onHide={() => setShowTerminal(false)}
      />
    </>
  );
}

export default FloatingTerminalBtn;
