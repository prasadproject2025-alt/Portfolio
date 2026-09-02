import React, { useState } from "react";
import { Modal, Button, Badge, Table } from "react-bootstrap";
import { BsCheckCircle, BsPlayFill, BsTerminal, BsCopy, BsShieldCheck } from "react-icons/bs";

function PatentModal({ show, onHide, patent }) {
  const [copiedApp, setCopiedApp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState("interactive"); // "interactive" | "official"

  // Simulator states
  const [queryInput, setQueryInput] = useState("drone flight fog safety");
  const [queryResult, setQueryResult] = useState(null);

  const [lockerUnit, setLockerUnit] = useState("LOCKER-B04");
  const [lockerResult, setLockerResult] = useState(null);

  const [hyperSample, setHyperSample] = useState("Palmar_Scan_Patient_01.png");
  const [hyperResult, setHyperResult] = useState(null);

  const [mosquitoFreq, setMosquitoFreq] = useState("38.4 kHz (Ultrasonic Pulse)");
  const [mosquitoResult, setMosquitoResult] = useState(null);

  if (!patent) return null;

  const copyAppNo = () => {
    navigator.clipboard.writeText(patent.appNo);
    setCopiedApp(true);
    setTimeout(() => setCopiedApp(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(patent.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSimulate = () => {
    switch (patent.id) {
      case "patent-query":
        setQueryResult({
          original: queryInput,
          counterfactualRank: [
            { rank: 1, query: "UAV autonomous flight safety boundaries in low-visibility fog", similarity: "0.942", score: "TOP_RANKED_REPAIR" },
            { rank: 2, query: "Edge compute drone collision avoidance during atmospheric fog", similarity: "0.891", score: "ALT_MATCH" }
          ],
          latency: "12ms",
          disambiguationStatus: "AMBIGUITY RESOLVED"
        });
        break;

      case "patent-locker":
        setLockerResult({
          unit: lockerUnit,
          edgeController: "ESP32 Edge Node (Offline Token Fallback Active)",
          authStatus: "AUTHENTICATED (OTP + RFID Handshake)",
          doorLock: "SOLENOID LATCH UNLOCKED",
          auditLog: `Log #${Math.floor(Math.random()*90000 + 10000)} saved to Local Edge Flash Memory`
        });
        break;

      case "patent-hyperhidrosis":
        setHyperResult({
          sample: hyperSample,
          moistureIndex: "68.4% Palmar Surface Sweat Saturation",
          severityGrade: "Moderate-to-Severe Palmar Hyperhidrosis (Grade 3)",
          cvAnalysis: "HSV Color Space Pore Dilation & Micro-Droplet Contour Extraction",
          confidence: "97.8% Non-Invasive Quantitative Accuracy"
        });
        break;

      case "patent-mosquito":
        setMosquitoResult({
          frequency: mosquitoFreq,
          detectionMethod: "Dual Optical Camera + Acoustic Frequency Spectrum",
          targetSpecies: "Anopheles / Aedes Mosquito Wingbeat Detected (450 Hz)",
          repellentPulse: "ADAPTIVE ULTRASONIC MIST PULSE TRIGGERED (Duration: 3.5s)",
          dispenserStatus: "Dispensed 0.05 ml Repellent • Safety Boundary Enforced"
        });
        break;

      default:
        setQueryResult({ status: "PATENT VERIFIED & PUBLISHED" });
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="project-inspect-modal"
      backdrop="static"
    >
      <Modal.Header closeButton style={{ borderBottom: "1px solid rgba(245, 158, 11, 0.4)", background: "rgba(26, 17, 48, 0.95)" }}>
        <div>
          <div className="d-flex align-items-center gap-2">
            <BsShieldCheck color="#f59e0b" size={22} />
            <Modal.Title style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.25rem" }}>
              {patent.title}
            </Modal.Title>
          </div>
          <div className="mt-1 d-flex flex-wrap align-items-center gap-2">
            <Badge bg="warning" text="dark" style={{ fontWeight: "bold" }}>
              PATENT PUBLISHED U/S 11A
            </Badge>
            <Badge bg="dark" style={{ border: "1px solid rgba(245, 158, 11, 0.5)", color: "#fbbf24" }}>
              App No: {patent.appNo}
            </Badge>
            <Badge bg="secondary">
              Field: {patent.field}
            </Badge>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "#141226", color: "#e0d6f5", padding: "24px" }}>
        {/* Visual Banner */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={patent.imgPath}
            alt={patent.title}
            style={{
              maxHeight: "180px",
              width: "auto",
              maxWidth: "100%",
              borderRadius: "10px",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)"
            }}
          />
        </div>

        {/* Tab Navigation */}
        <div className="d-flex gap-2 mb-3">
          <Button
            size="sm"
            variant={activeTab === "interactive" ? "warning" : "outline-secondary"}
            onClick={() => setActiveTab("interactive")}
            style={{ fontWeight: "600" }}
          >
            <BsTerminal /> &nbsp; Interactive Patent Innovation Playground
          </Button>
          <Button
            size="sm"
            variant={activeTab === "official" ? "warning" : "outline-secondary"}
            onClick={() => setActiveTab("official")}
            style={{ fontWeight: "600" }}
          >
            Official Application Details &amp; Records
          </Button>
        </div>

        {activeTab === "official" ? (
          <div>
            <h6 style={{ color: "#fbbf24", fontWeight: "bold" }}>Official Intellectual Property Record</h6>
            <Table responsive striped bordered hover variant="dark" style={{ fontSize: "0.85rem", marginTop: "10px" }}>
              <tbody>
                <tr>
                  <td style={{ color: "#fbbf24", width: "35%", fontWeight: "bold" }}>APPLICATION NUMBER</td>
                  <td><strong>{patent.appNo}</strong></td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>TITLE OF INVENTION</td>
                  <td>{patent.title}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>APPLICATION TYPE</td>
                  <td>{patent.appType}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>DATE OF FILING</td>
                  <td>{patent.filingDate}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>PUBLICATION DATE (U/S 11A)</td>
                  <td><strong style={{ color: "#10b981" }}>{patent.publicationDate}</strong></td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>REQUEST FOR EXAMINATION</td>
                  <td>{patent.examinationDate}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>APPLICANT NAME</td>
                  <td>{patent.applicant}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>FIELD OF INVENTION</td>
                  <td>{patent.field}</td>
                </tr>
                <tr>
                  <td style={{ color: "#fbbf24", fontWeight: "bold" }}>OFFICIAL CONTACT RECORD</td>
                  <td>{patent.email} | {patent.additionalEmail}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          /* Interactive Session Simulator for Patents */
          <div className="interactive-session-box" style={{ borderColor: "rgba(245, 158, 11, 0.4)" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "0.95rem" }}>
                ⚡ Patent Innovation Simulator ({patent.interactiveTitle || "Interactive Patent Inspection"})
              </span>
              <Badge bg="warning" text="dark">Patent Interactive Mode</Badge>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#a8a29e", marginBottom: "12px" }}>
              Simulate the patented mechanism and key claims in real time.
            </p>

            {patent.id === "patent-query" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Input Ambiguous User Query:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                  />
                </div>
                <Button size="sm" variant="warning" onClick={handleSimulate}>
                  <BsPlayFill /> Execute Counterfactual Embedding Ranking
                </Button>

                {queryResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #fbbf24" }}>
                    <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {queryResult.disambiguationStatus} (Latency: {queryResult.latency})
                    </div>
                    <div className="mt-2" style={{ fontSize: "0.82rem" }}>
                      {queryResult.counterfactualRank.map((r, i) => (
                        <div key={i} className="mb-1">
                          Rank #{r.rank}: <strong>"{r.query}"</strong> — Similarity: {r.similarity} ({r.score})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {patent.id === "patent-locker" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Target Cloakroom Locker Unit:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={lockerUnit}
                    onChange={(e) => setLockerUnit(e.target.value)}
                  >
                    <option value="LOCKER-B04">Locker Unit #B-04 (Luggage Section)</option>
                    <option value="LOCKER-A12">Locker Unit #A-12 (Express Drop)</option>
                  </select>
                </div>
                <Button size="sm" variant="warning" onClick={handleSimulate}>
                  <BsPlayFill /> Trigger Autonomous Edge Locker Allocation
                </Button>

                {lockerResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #38bdf8" }}>
                    <div style={{ color: "#38bdf8", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {lockerResult.doorLock} ({lockerResult.unit})
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Edge Controller: {lockerResult.edgeController}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      {lockerResult.authStatus} • {lockerResult.auditLog}
                    </div>
                  </div>
                )}
              </div>
            )}

            {patent.id === "patent-hyperhidrosis" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Select Palmar Image Scan:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={hyperSample}
                    onChange={(e) => setHyperSample(e.target.value)}
                  >
                    <option value="Palmar_Scan_Patient_01.png">Patient Scan #01 (Active Moisture Droplets)</option>
                    <option value="Palmar_Scan_Patient_02.png">Patient Scan #02 (Moderate Moisture)</option>
                  </select>
                </div>
                <Button size="sm" variant="warning" onClick={handleSimulate}>
                  <BsPlayFill /> Run Computer Vision Non-Invasive Assessment
                </Button>

                {hyperResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #ec4899" }}>
                    <div style={{ color: "#ec4899", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Quantitative Result: {hyperResult.severityGrade}
                    </div>
                    <div style={{ fontSize: "0.82rem", marginTop: "2px", color: "#ffffff" }}>
                      Moisture Metric: <strong>{hyperResult.moistureIndex}</strong>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Pipeline: {hyperResult.cvAnalysis} • {hyperResult.confidence}
                    </div>
                  </div>
                )}
              </div>
            )}

            {patent.id === "patent-mosquito" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Dispenser Repellent Mode:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={mosquitoFreq}
                    onChange={(e) => setMosquitoFreq(e.target.value)}
                  >
                    <option value="38.4 kHz (Ultrasonic Pulse)">38.4 kHz (Ultrasonic Frequency Pulse)</option>
                    <option value="Adaptive Bio-Mist Micro-Pulse">Adaptive Bio-Mist Micro-Pulse</option>
                  </select>
                </div>
                <Button size="sm" variant="warning" onClick={handleSimulate}>
                  <BsPlayFill /> Run Real-Time Detection &amp; Adaptive Dispense Test
                </Button>

                {mosquitoResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #10b981" }}>
                    <div style={{ color: "#10b981", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {mosquitoResult.targetSpecies}
                    </div>
                    <div style={{ fontSize: "0.82rem", marginTop: "2px", color: "#ffffff" }}>
                      Action: <strong>{mosquitoResult.repellentPulse}</strong>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Detection: {mosquitoResult.detectionMethod} • {mosquitoResult.dispenserStatus}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Modal.Body>

      <Modal.Header style={{ borderTop: "1px solid rgba(245, 158, 11, 0.3)", borderBottom: "none", background: "rgba(26, 17, 48, 0.95)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
        <div className="d-flex gap-2">
          <Button size="sm" variant="outline-warning" onClick={copyAppNo} style={{ fontSize: "0.82rem" }}>
            {copiedApp ? <BsCheckCircle color="#10b981" /> : <BsCopy />} &nbsp;
            {copiedApp ? "App No. Copied!" : `Copy App No. (${patent.appNo})`}
          </Button>
          <Button size="sm" variant="outline-light" onClick={copyEmail} style={{ fontSize: "0.82rem" }}>
            {copiedEmail ? <BsCheckCircle color="#10b981" /> : <BsCopy />} &nbsp;
            {copiedEmail ? "Email Copied!" : "Copy Legal Email"}
          </Button>
        </div>
        <Button size="sm" variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Header>
    </Modal>
  );
}

export default PatentModal;
