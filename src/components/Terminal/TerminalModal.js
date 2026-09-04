import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { BsTerminal, BsSend, BsTrash, BsArrowRight } from "react-icons/bs";

const COMMAND_RESPONSES = {
  help: `Available Commands:
  • about        - Summary of Durga Prasad & background
  • skills       - Categorized technical competencies
  • projects     - Top software & AI projects
  • patents      - 5 Published Patents with Indian Patent Office
  • publications - IEEE Conference publication details
  • education    - Integrated M.Tech (VIT) & CGPA metrics
  • contact      - Email, LinkedIn, GitHub & Phone
  • hire         - Why hire Durga Prasad (Key strengths)
  • clear        - Clear terminal history`,

  about: `👤 S DURGA PRASAD
• Integrated M.Tech Software Engineering at Vellore Institute of Technology (VIT)
• Current CGPA: 8.64 / 10 (2022–2027)
• Trainee: NxtWave CCBP 4.0 Industry Ready Software Development Program
• Active Member: Technology Business Incubator (TBI) at VIT
• Core Focus: Scalable Cloud Web Architecture, Generative AI (LLMs & RAG), Computer Vision, and Hardware Security.`,

  skills: `💻 TECHNICAL SKILLS & STACK:
• Languages: Java 17+, Python, C/C++, JavaScript (ES6+), SQL
• Web & Backend: React.js, Flask, Spring Boot, REST APIs, Microservices, HTML5, CSS3, Bootstrap
• AI & LLMs: Generative AI, Hybrid RAG, Transformers (BERT, LLaMA 3.3, Cohere), PyTorch, TensorFlow, OpenCV, Scikit-Learn
• Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, Kubernetes, Git, Postman, Vercel, Prometheus, Grafana
• Core CS: DSA, OOP, DBMS, SQL Query Optimization, Operating Systems, SDLC, Agile/Scrum, Automated Testing`,

  projects: `🚀 TOP HIGHLIGHTED PROJECTS:
1. NoteShare Academic Marketplace (2,000+ MIS users, Firebase NoSQL, Coin Economy)
2. Multilingual Crop Disease Assistant (Hybrid RAG, 11 Indian Languages, Gemini API, gTTS)
3. Adversarial Attack & Defense for NLP (BERT IMDB, 78.6% -> 88.9% Defended Accuracy)
4. Contactless Hand Biometric Payment (MobileNetV2 + SVM RBF, AES Fernet, Twilio SMS)
5. Smart Automated Medication Assistant (ESP32-CAM Face AI + RC522 RFID Dispenser)
6. Cloud-Based Potato Disease Detection (AWS EC2 / S3 / Lambda / React)
7. Edge UAV Crowd Analytics (YOLOv8 Nano + MiDaS Monocular Depth Estimation)
8. Smart Farming Platform (Java 17, Spring Boot 2.7+, PostgreSQL, OpenWeatherMap)`,

  patents: `📜 5 PUBLISHED PATENTS (Indian Patent Office U/S 11A):
1. #202641007487 - System for Repairing Ambiguous Queries Using Counterfactual Embedding Ranking (CS)
2. #202641007481 - Autonomous Edge-Controlled Locker & Cloakroom Management System (Electronics)
3. #202641009563 - Non-Invasive Quantitative Palmar Hyperhidrosis Computer Vision Assessment (Bio-Medical)
4. #202641009539 - Real-Time Mosquito Detection & Adaptive Repellent Dispenser (Physics/Embedded)
5. Additional Published Patent Application on File`,

  publications: `📚 IEEE CONFERENCE PUBLICATION:
• Title: "Enhancing Writing Quality with AI: A Multi-Model Approach"
• Publisher: IEEE Xplore (Document ID: 11452396)
• Metrics: 92.3% Grammar Correction Accuracy | 89.1% Genre Classification Accuracy
• Pipeline: BART-MNLI, Meta LLaMA 3.3, Cohere API, LanguageTool`,

  education: `🎓 ACADEMIC BACKGROUND:
• Institution: Vellore Institute of Technology (VIT), Vellore, India
• Degree: Integrated M.Tech in Software Engineering
• CGPA: 8.64 / 10
• Timeline: Sept 2022 – July 2027 (Expected)
• Training: NxtWave CCBP 4.0 Industry Ready Software Engineer Program (Sept 2023 – Present)`,

  contact: `📬 CONTACT & LINKS:
• Email: durgaprasad.s2022a@vitstudent.ac.in
• Phone: +91-9788237520
• LinkedIn: https://linkedin.com/in/durga-prasad-sundarraj
• GitHub: https://github.com/prasadproject2025-alt
• Portfolio: https://prasadd-portfolio.vercel.app/`,

  hire: `⭐ TOP REASONS TO HIRE DURGA PRASAD:
1. Proven Production Impact: Shipped NoteShare serving 2,000+ active users.
2. Research & IP Track Record: 1 IEEE Publication + 5 Published Patents.
3. Solid Engineering Foundation: High CGPA (8.64/10) at VIT + NxtWave CCBP 4.0 mastery.
4. Versatile Full-Stack + AI: Proficient across Python, Java, React, Docker, AWS & Generative AI/LLMs.`
};

function TerminalModal({ show, onHide }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "⚡ Antigravity Dev Terminal v2.4 initialized for S Durga Prasad's Portfolio." },
    { type: "system", text: "Type 'help' or click any quick prompt button below to explore." }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([
        { type: "system", text: "Terminal screen cleared. Type 'help' for commands." }
      ]);
      setInputVal("");
      return;
    }

    const userEntry = { type: "user", text: `$ ${rawCmd}` };
    const responseText = COMMAND_RESPONSES[cmd] || `Command not found: '${rawCmd}'. Type 'help' for list of commands.`;
    const responseEntry = { type: "output", text: responseText };

    setHistory((prev) => [...prev, userEntry, responseEntry]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    }
  };

  const quickPrompts = [
    { label: "⚡ Why Hire Durga?", cmd: "hire" },
    { label: "🤖 Top AI & LLM Projects", cmd: "projects" },
    { label: "📜 5 Published Patents", cmd: "patents" },
    { label: "📚 IEEE Paper", cmd: "publications" },
    { label: "🎓 Education & CGPA", cmd: "education" },
    { label: "📬 Contact Details", cmd: "contact" }
  ];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="project-inspect-modal"
      backdrop="static"
    >
      <Modal.Header closeButton style={{ borderBottom: "1px solid rgba(16, 185, 129, 0.4)", background: "rgba(10, 25, 20, 0.95)" }}>
        <div className="d-flex align-items-center gap-2">
          <BsTerminal color="#10b981" size={22} />
          <Modal.Title style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.2rem" }}>
            Durga's Interactive Developer Terminal &amp; AI Portfolio Assistant
          </Modal.Title>
          <Badge bg="success" style={{ fontSize: "0.75rem" }}>ONLINE</Badge>
        </div>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "#060f0b", color: "#a7f3d0", padding: "18px", fontFamily: "monospace" }}>
        {/* Quick Command Prompt Pills */}
        <div className="d-flex gap-2 flex-wrap mb-3">
          {quickPrompts.map((q, idx) => (
            <Button
              key={idx}
              size="sm"
              variant="outline-success"
              onClick={() => executeCommand(q.cmd)}
              style={{ fontSize: "0.78rem", fontWeight: "600", borderRadius: "14px", padding: "3px 10px" }}
            >
              <BsArrowRight /> {q.label}
            </Button>
          ))}
        </div>

        {/* Terminal Screen Output Area */}
        <div
          style={{
            minHeight: "280px",
            maxHeight: "360px",
            overflowY: "auto",
            background: "rgba(3, 15, 10, 0.9)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "0.86rem",
            lineHeight: "1.5"
          }}
        >
          {history.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "8px",
                color: item.type === "user" ? "#fbbf24" : item.type === "system" ? "#38bdf8" : "#e2e8f0",
                whiteSpace: "pre-wrap"
              }}
            >
              {item.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className="d-flex align-items-center gap-2 mt-3">
          <span style={{ color: "#10b981", fontWeight: "bold", fontSize: "1rem" }}>guest@durga:~$</span>
          <input
            type="text"
            className="form-control form-control-sm bg-dark text-white border-success"
            style={{ fontFamily: "monospace", color: "#a7f3d0" }}
            placeholder="Type command (e.g. help, projects, patents, contact, hire)..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <Button size="sm" variant="success" onClick={() => executeCommand(inputVal)}>
            <BsSend />
          </Button>
        </div>
      </Modal.Body>

      <Modal.Footer style={{ borderTop: "1px solid rgba(16, 185, 129, 0.3)", background: "rgba(10, 25, 20, 0.95)", display: "flex", justifyContent: "space-between" }}>
        <Button size="sm" variant="outline-danger" onClick={() => executeCommand("clear")} style={{ fontSize: "0.8rem" }}>
          <BsTrash /> Clear Screen
        </Button>
        <Button size="sm" variant="secondary" onClick={onHide}>
          Close Terminal
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TerminalModal;
