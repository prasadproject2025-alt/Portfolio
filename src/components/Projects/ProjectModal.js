import React, { useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { BsGithub, BsCheckCircle, BsPlayFill, BsTerminal, BsCopy } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectModal({ show, onHide, project }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("interactive"); // "overview" | "interactive"

  // Simulator states
  const [cropOption, setCropOption] = useState("Tomato");
  const [cropSymptom, setCropSymptom] = useState("Yellow leaf spots with dark halos");
  const [cropResult, setCropResult] = useState(null);

  const [yoloFrame, setYoloFrame] = useState("autonomous-road");
  const [yoloResult, setYoloResult] = useState(null);

  const [writingSample, setWritingSample] = useState("AI is changing world very fast and we must to adapt.");
  const [writingTone, setWritingTone] = useState("Professional");
  const [writingResult, setWritingResult] = useState(null);

  const [bioScanning, setBioScanning] = useState(false);
  const [bioResult, setBioResult] = useState(null);

  const [resItem, setResItem] = useState("ESP32-IoT-Node");
  const [resQty, setResQty] = useState(2);
  const [resResult, setResResult] = useState(null);

  const [rfidCard, setRfidCard] = useState("CARD-A849-01");
  const [rfidResult, setRfidResult] = useState(null);

  const [pdfSample, setPdfSample] = useState("AcmeCorp_Invoice_2026.pdf");
  const [pdfResult, setPdfResult] = useState(null);

  const [cesQuery, setCesQuery] = useState("Autonomous drone collision probability under sensor fog");
  const [cesResult, setCesResult] = useState(null);

  const [noteSearch, setNoteSearch] = useState("CSE2005");
  const [noteResult, setNoteResult] = useState(null);

  // New Simulator states
  const [nlpAttack, setNlpAttack] = useState("word-level");
  const [nlpResult, setNlpResult] = useState(null);

  const [soilType, setSoilType] = useState("Black Soil (pH 7.2)");
  const [soilResult, setSoilResult] = useState(null);

  const [ngoCategory, setNgoCategory] = useState("Clothes");
  const [ngoResult, setNgoResult] = useState(null);

  const [pirMotion, setPirMotion] = useState("MOTION_DETECTED");
  const [ldrLux, setLdrLux] = useState("LOW_LIGHT_150_LUX");
  const [lightingResult, setLightingResult] = useState(null);

  const [potatoSample, setPotatoSample] = useState("Potato_Leaf_Sample_01.png");
  const [potatoResult, setPotatoResult] = useState(null);

  const [mangoCategory, setMangoCategory] = useState("Anthracnose");
  const [mangoResult, setMangoResult] = useState(null);

  const [ehrRole, setEhrRole] = useState("Doctor");
  const [ehrResult, setEhrResult] = useState(null);

  const [promMetric, setPromMetric] = useState("prediction_latency_seconds");
  const [promResult, setPromResult] = useState(null);

  const [bigmartMrp, setBigmartMrp] = useState(145.8);
  const [bigmartResult, setBigmartResult] = useState(null);

  const [parkDuration, setParkDuration] = useState(3);
  const [parkResult, setParkResult] = useState(null);

  if (!project) return null;

  const copyClone = () => {
    navigator.clipboard.writeText(`git clone ${project.ghLink}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    switch (project.interactiveType) {
      case "crop-rag":
        setCropResult({
          disease: cropOption === "Tomato" ? "Early Blight (Alternaria solani)" : "Leaf Rust / Fungal Blight",
          confidence: "98.7%",
          severity: "Moderate (Level 2)",
          ragSource: "ICAR Agricultural Vector Database (Chunk #4102)",
          treatment: "Apply copper fungicide spray. Ensure drip irrigation to reduce foliage moisture.",
          tamilAdvice: "தக்காளி இலை கருகல் நோய் - தாமிர அடிப்படையிலான பூஞ்சைக்கொல்லி தெளிக்கவும்."
        });
        break;

      case "yolo-midas":
        setYoloResult({
          frame: yoloFrame,
          backbone: "ResNeXt101 (Shared Feature Extractor)",
          latency: "24.2 ms (41.3 FPS)",
          detections: [
            { class: "Vehicle", confidence: "94.8%", depth: "14.2 meters" },
            { class: "Pedestrian", confidence: "89.1%", depth: "6.8 meters" },
            { class: "Traffic Sign", confidence: "97.4%", depth: "22.5 meters" }
          ],
          depthMapRange: "0.5m to 85.0m normalized disparity"
        });
        break;

      case "uav-crowd":
        setYoloResult({
          frame: "UAV Aerial Drone View (Altitude: 45m)",
          backbone: "YOLOv8 Nano + MiDaS Edge Optimization",
          latency: "18.5 ms (54 FPS on TensorRT)",
          detections: [
            { class: "Crowd Cluster A", confidence: "96.2%", depth: "42m height • 18 persons" },
            { class: "Crowd Cluster B", confidence: "91.5%", depth: "45m height • 27 persons" }
          ],
          depthMapRange: "Spatial Density: 1.8 persons / m² (Safe Zone • CSV Log Saved)"
        });
        break;

      case "writing-ai":
        setWritingResult({
          original: writingSample,
          tone: writingTone,
          improved: writingTone === "Professional"
            ? "Artificial intelligence is advancing rapidly, requiring strategic and agile adaptation across organizations."
            : writingTone === "Academic"
            ? "The accelerated progression of artificial intelligence models necessitates empirical frameworks for institutional adaptability."
            : "AI is reshaping our future at lightning speed—embracing this evolution unlocks limitless creative potential!",
          readabilityScore: "+38% Readability Index",
          grammarErrorsFixed: 2,
          bartScore: "85.0% F1 Tone Consistency"
        });
        break;

      case "biometrics":
        setBioScanning(true);
        setTimeout(() => {
          setBioScanning(false);
          setBioResult({
            sensor: "Contactless High-Res Optical Sensor",
            featureVector: "128-D MobileNetV2 Latent Embedding",
            encryption: "AES-256 (Fernet Cipher Token)",
            matchScore: "99.42% Confidence (Accuracy: 93.5%, FPR: 3.2%)",
            status: "AUTHENTICATION SUCCESSFUL",
            user: "S Durga Prasad (Verified ID #2026-DP)"
          });
        }, 800);
        break;

      case "inventory":
        setResResult({
          item: resItem,
          reservedQuantity: resQty,
          stockRemaining: 48 - resQty,
          reservationToken: `RES-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
          status: "LOCKED & RESERVED",
          syncTimestamp: new Date().toLocaleTimeString()
        });
        break;

      case "iot-warehouse":
        setRfidResult({
          card: rfidCard,
          accessZone: "Warehouse Unit 1 - Main Perimeter",
          esp32Status: "ESP32 WiFi Node Online (RSSI: -58 dBm)",
          firebaseSync: "Synced to Realtime Database /logs/security",
          accessGranted: true,
          timestamp: new Date().toLocaleTimeString()
        });
        break;

      case "autorename":
        setPdfResult({
          originalName: pdfSample,
          detectedCompany: "ACME CORP GLOBAL",
          detectedDate: "2026-08-15",
          documentType: "TAX_INVOICE",
          suggestedNewName: "20260815_ACME_CORP_GLOBAL_INVOICE.pdf",
          ocrConfidence: "99.1%"
        });
        break;

      case "ces-ai":
        setCesResult({
          query: cesQuery,
          repairedEmbedding: "Counterfactual Context Repaired (k-NN search in perturbed latent space)",
          hallucinationRisk: "Reduced from 42% -> 1.4%",
          semanticConsistency: "98.9% Context Retention"
        });
        break;

      case "noteshare":
        setNoteResult({
          course: noteSearch,
          matches: [
            { title: `${noteSearch} Complete Midterm Study Guide`, author: "DP & Community", rating: "4.9/5", downloads: 412 },
            { title: `${noteSearch} Formula Sheet & Lab Practice`, author: "Verified Peer", rating: "4.8/5", downloads: 289 }
          ]
        });
        break;

      case "nlp-adversarial":
        setNlpResult({
          attackType: nlpAttack === "word-level" ? "Word-Level Synonym Substitution (TextAttack)" : nlpAttack === "char-level" ? "Character-Level Edits" : "Sentence Rephrasing",
          cleanAccuracy: "92.4%",
          attackedAccuracy: "78.6% (Perturbed Loss)",
          defendedAccuracy: "88.9% (Recovered via Adversarial Training & Ensembling)",
          precision: "88.2%",
          recall: "89.5%",
          f1: "88.8%"
        });
        break;

      case "springboot-farm":
        setSoilResult({
          soilType,
          recommendedCrop: soilType.includes("Black") ? "Cotton / Wheat / Soybean" : "Groundnut / Pulses",
          nitrogenStatus: "Optimal (140 kg/ha)",
          weatherSync: "OpenWeatherMap: 28°C, Humidity 64%, Clear Sky",
          pdfGenerated: true
        });
        break;

      case "cloth-donation":
        setNgoResult({
          category: ngoCategory,
          matchedNgos: [
            { name: "Sevaarth Relief Foundation", distance: "2.4 km away", verified: true, phone: "+91 9876543210" },
            { name: "Hope Community Care NGO", distance: "4.1 km away", verified: true, phone: "+91 9812345678" }
          ],
          eventPdfGenerated: "Event_Card_Shareable.pdf"
        });
        break;

      case "smart-lighting":
        const isAutoOn = pirMotion === "MOTION_DETECTED" && ldrLux.includes("LOW_LIGHT");
        setLightingResult({
          mode: "Automatic Occupancy & Lux Conditional Logic",
          pirState: pirMotion,
          luxValue: "150 Lux (Below 300 Lux Threshold)",
          relayStatus: isAutoOn ? "RELAY ACTIVATED (LED Lights ON)" : "RELAY INACTIVE (LED Lights OFF)",
          energySaved: "34.5% Power Reduction vs Standard Fixtures",
          blynkSync: "Synced over Wi-Fi (ESP8266 REST API)"
        });
        break;

      case "potato-cloud":
        setPotatoResult({
          sample: potatoSample,
          classifiedLabel: "Early Blight (Alternaria solani)",
          confidence: "98.4%",
          preprocessing: "256x256 Resized, CLAHE Contrast Enhanced",
          awsInstance: "AWS EC2 t2.micro (Ubuntu 20.04) • S3 Logged",
          latency: "145 ms"
        });
        break;

      case "mango-hybrid":
        setMangoResult({
          diseaseClass: mangoCategory,
          architecture: "CNN + EfficientNet-B0 + CapsNet (Dynamic Routing)",
          segmentation: "Otsu Thresholding & Contour ROI Extraction",
          psnrScore: "34.2 dB",
          ssimScore: "0.941",
          testAccuracy: "93.75% Overall Test Accuracy (Macro F1: 0.92)"
        });
        break;

      case "secure-health-sftp":
        setEhrResult({
          role: ehrRole,
          encryption: "Hybrid AES-256 (Fernet) Payload + 2048-bit RSA Key",
          integrityHash: "SHA-256: 4f8b9...c31a (Verified Match)",
          sftpProtocol: "Paramiko SSH/SFTP E2EE Transfer",
          rbacStatus: ehrRole === "Dean" ? "FULL ADMIN PRIVILEGES" : "AUTHORIZED DOCTOR ACCESS",
          accountPolicy: "0 Failed Attempt (Account Healthy)"
        });
        break;

      case "prometheus-mlops":
        setPromResult({
          metric: promMetric,
          value: promMetric === "prediction_latency_seconds" ? "0.042s (42 ms avg)" : "14,890 total requests",
          endpoint: "Scraped via /metrics at Port 8000",
          grafanaStatus: "Dashboard Active • Alertmanager Healthy",
          hostMemory: "Node Exporter RAM: 1.4 GB / 8.0 GB"
        });
        break;

      case "bigmart-sales":
        setBigmartResult({
          mrp: `$${bigmartMrp}`,
          imputer: "KNNImputer (k=10, distance weighted)",
          model: "XGBoost Gradient Boosting Regressor",
          forecastedSales: `$${(bigmartMrp * 18.5).toFixed(2)} estimated annual outlet sales`,
          rmse: "1084.2",
          r2Score: "0.684"
        });
        break;

      case "parkwise":
        setParkResult({
          duration: `${parkDuration} hours`,
          algorithm: "Firefly Optimization Dynamic Fare Calculation",
          calculatedPrice: `₹${parkDuration * 40}`,
          authMethod: "Email OTP 2FA Verified",
          doubleBookingPrevented: true,
          status: "SLOT LOCKED & CONFIRMED"
        });
        break;

      default:
        setCropResult({
          systemStatus: "ONLINE",
          latency: "14ms",
          metrics: "All test assertions passing (100%)",
          buildStatus: "Healthy"
        });
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
      <Modal.Header closeButton style={{ borderBottom: "1px solid rgba(199, 112, 240, 0.3)" }}>
        <div>
          <Modal.Title style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.35rem" }}>
            {project.title}
          </Modal.Title>
          <div className="mt-1 d-flex flex-wrap align-items-center gap-2">
            <Badge bg="secondary" style={{ backgroundColor: "#623686 !important" }}>
              {project.category}
            </Badge>
            {project.language && (
              <Badge bg="dark" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
                {project.language}
              </Badge>
            )}
            {project.demoLink && (
              <Badge bg="success" style={{ fontSize: "0.75rem" }}>
                Live Demo Available
              </Badge>
            )}
          </div>
        </div>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "#141226", color: "#e0d6f5", padding: "24px" }}>
        {/* Project Visual Banner */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={project.imgPath}
            alt={project.title}
            style={{
              maxHeight: "180px",
              width: "auto",
              maxWidth: "100%",
              borderRadius: "10px",
              border: "1px solid rgba(199, 112, 240, 0.25)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
            }}
          />
        </div>

        {/* Tab Navigation */}
        <div className="d-flex gap-2 mb-3">
          <Button
            size="sm"
            variant={activeTab === "interactive" ? "primary" : "outline-secondary"}
            onClick={() => setActiveTab("interactive")}
            style={{ fontWeight: "600" }}
          >
            <BsTerminal /> &nbsp; Interactive Session &amp; Test Playground
          </Button>
          <Button
            size="sm"
            variant={activeTab === "overview" ? "primary" : "outline-secondary"}
            onClick={() => setActiveTab("overview")}
            style={{ fontWeight: "600" }}
          >
            Overview &amp; Architecture
          </Button>
        </div>

        {activeTab === "overview" ? (
          <div>
            <h6 style={{ color: "#c770f0", fontWeight: "bold" }}>Project Synopsis</h6>
            <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
              {project.longDescription || project.description}
            </p>

            <h6 style={{ color: "#c770f0", fontWeight: "bold", marginTop: "15px" }}>
              Key Technical Highlights
            </h6>
            <ul style={{ paddingLeft: "20px" }}>
              {project.highlights ? (
                project.highlights.map((h, i) => <li key={i}>{h}</li>)
              ) : (
                <>
                  <li>Full source code and modular pipeline architecture available on GitHub.</li>
                  <li>Engineered with scalable software design patterns and clean error handling.</li>
                  <li>Ready for local deployment and containerized execution.</li>
                </>
              )}
            </ul>

            <h6 style={{ color: "#c770f0", fontWeight: "bold", marginTop: "15px" }}>
              Technologies &amp; Libraries
            </h6>
            <div>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* Interactive Session Simulator */
          <div className="interactive-session-box">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ color: "#c770f0", fontWeight: "bold", fontSize: "0.95rem" }}>
                ⚡ Live Inspection Playground ({project.interactiveTitle || "Interactive Simulation"})
              </span>
              <Badge bg="info" text="dark">Interactive Mode</Badge>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#a8a29e", marginBottom: "12px" }}>
              Simulate the core logic, API parameters, or AI model inference in real-time.
            </p>

            {/* Custom Interactive UI based on project type */}
            {project.interactiveType === "nlp-adversarial" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Adversarial Attack Perturbation Strategy:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={nlpAttack}
                    onChange={(e) => setNlpAttack(e.target.value)}
                  >
                    <option value="word-level">Word-Level Synonym Substitution (TextAttack)</option>
                    <option value="char-level">Character-Level Edits (Typos &amp; Swaps)</option>
                    <option value="sentence-level">Sentence-Level Rephrasing</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Evaluate BERT Attack vs Defense Resilience
                </Button>
                {nlpResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #c770f0" }}>
                    <div style={{ color: "#c770f0", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Attack Evaluated: {nlpResult.attackType}
                    </div>
                    <div style={{ fontSize: "0.82rem", marginTop: "4px" }}>
                      Clean Accuracy: <strong>{nlpResult.cleanAccuracy}</strong> | Under Attack: <span style={{ color: "#ef476f" }}>{nlpResult.attackedAccuracy}</span>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: "bold", marginTop: "4px" }}>
                      Recovered Defended Accuracy: {nlpResult.defendedAccuracy}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Precision: {nlpResult.precision} • Recall: {nlpResult.recall} • F1-Score: {nlpResult.f1}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "springboot-farm" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Select Soil Profile &amp; Location:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                  >
                    <option value="Black Soil (pH 7.2)">Black Cotton Soil (pH 7.2 - High Retentivity)</option>
                    <option value="Red Sandy Soil (pH 6.4)">Red Loamy Soil (pH 6.4 - Well Drained)</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Execute Spring Boot Soil Analysis &amp; Weather Sync
                </Button>
                {soilResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #10b981" }}>
                    <div style={{ color: "#10b981", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Crop Recommendation: {soilResult.recommendedCrop}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      {soilResult.weatherSync}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Nitrogen: {soilResult.nitrogenStatus} • Automated PDF Advisory Report Generated
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "cloth-donation" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Donation Need Category:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={ngoCategory}
                    onChange={(e) => setNgoCategory(e.target.value)}
                  >
                    <option value="Clothes">Winter Clothes &amp; Apparel</option>
                    <option value="Books">Educational Books &amp; Stationery</option>
                    <option value="Food">Food Packets &amp; Rations</option>
                    <option value="Medicines">First-Aid &amp; Essential Medicines</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Find Verified NGOs &amp; Generate Event Card
                </Button>
                {ngoResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #38bdf8" }}>
                    <div style={{ color: "#38bdf8", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Verified NGOs Found for "{ngoResult.category}":
                    </div>
                    <div className="mt-2" style={{ fontSize: "0.8rem" }}>
                      {ngoResult.matchedNgos.map((n, i) => (
                        <div key={i}>• <strong>{n.name}</strong> ({n.distance}) — {n.phone}</div>
                      ))}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "4px" }}>
                      Generated iText PDF Event Card: {ngoResult.eventPdfGenerated}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "smart-lighting" && (
              <div>
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>PIR Motion Sensor:</label>
                    <select
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      value={pirMotion}
                      onChange={(e) => setPirMotion(e.target.value)}
                    >
                      <option value="MOTION_DETECTED">Classroom Occupied (Motion Detected)</option>
                      <option value="NO_MOTION">Classroom Empty (No Motion)</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>LDR Ambient Lux:</label>
                    <select
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      value={ldrLux}
                      onChange={(e) => setLdrLux(e.target.value)}
                    >
                      <option value="LOW_LIGHT_150_LUX">Low Ambient Light (150 Lux)</option>
                      <option value="BRIGHT_DAYLIGHT_500_LUX">Bright Daylight (500 Lux)</option>
                    </select>
                  </div>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Evaluate ESP8266 IoT Level 2 Logic
                </Button>
                {lightingResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #fbbf24" }}>
                    <div style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ⚡ {lightingResult.relayStatus}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Mode: {lightingResult.mode}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#10b981", marginTop: "2px" }}>
                      {lightingResult.energySaved} • {lightingResult.blynkSync}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "potato-cloud" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Select Potato Leaf Sample:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={potatoSample}
                    onChange={(e) => setPotatoSample(e.target.value)}
                  >
                    <option value="Potato_Leaf_Sample_01.png">Sample #01 (Concentric Lesions)</option>
                    <option value="Potato_Leaf_Sample_02.png">Sample #02 (Healthy Green)</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Upload to AWS EC2 &amp; Run CNN Diagnostic
                </Button>
                {potatoResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #38bdf8" }}>
                    <div style={{ color: "#38bdf8", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Classification: {potatoResult.classifiedLabel} ({potatoResult.confidence})
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Host: {potatoResult.awsInstance} ({potatoResult.latency})
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Preprocessing: {potatoResult.preprocessing}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "mango-hybrid" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Mango Leaf Pathogen Category:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={mangoCategory}
                    onChange={(e) => setMangoCategory(e.target.value)}
                  >
                    <option value="Anthracnose">Anthracnose (Colletotrichum gloeosporioides)</option>
                    <option value="Bacterial Canker">Bacterial Canker</option>
                    <option value="Powdery Mildew">Powdery Mildew</option>
                    <option value="Gall Midge">Gall Midge Damage</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Execute EfficientNet-B0 + CapsNet Routing
                </Button>
                {mangoResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #f59e0b" }}>
                    <div style={{ color: "#f59e0b", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {mangoResult.testAccuracy}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Pipeline: {mangoResult.architecture}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Image Quality: PSNR {mangoResult.psnrScore} | SSIM {mangoResult.ssimScore} | {mangoResult.segmentation}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "secure-health-sftp" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>EHR User Role Credentials:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={ehrRole}
                    onChange={(e) => setEhrRole(e.target.value)}
                  >
                    <option value="Doctor">Doctor Tier (Assigned Patient Records)</option>
                    <option value="Dean">Dean Tier (Full Administrative Audit Access)</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Execute Hybrid AES/RSA Handshake &amp; SFTP Transfer
                </Button>
                {ehrResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #2dd4bf" }}>
                    <div style={{ color: "#2dd4bf", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {ehrResult.rbacStatus} • {ehrResult.sftpProtocol}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Encryption: {ehrResult.encryption}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Integrity: {ehrResult.integrityHash} • {ehrResult.accountPolicy}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "prometheus-mlops" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Scrape Prometheus Metric (Port 8000):</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={promMetric}
                    onChange={(e) => setPromMetric(e.target.value)}
                  >
                    <option value="prediction_latency_seconds">prediction_latency_seconds (Histogram)</option>
                    <option value="prediction_count_total">prediction_count_total (Counter)</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Probe /metrics Endpoint &amp; Grafana Health
                </Button>
                {promResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #f43f5e" }}>
                    <div style={{ color: "#f43f5e", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {promResult.metric} = {promResult.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Endpoint: {promResult.endpoint}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      {promResult.grafanaStatus} • {promResult.hostMemory}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "bigmart-sales" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Item Maximum Retail Price (MRP):</label>
                  <input
                    type="number"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={bigmartMrp}
                    onChange={(e) => setBigmartMrp(Number(e.target.value))}
                  />
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run XGBoost Sales Forecast &amp; KNN Imputation
                </Button>
                {bigmartResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #60a5fa" }}>
                    <div style={{ color: "#60a5fa", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Forecast: {bigmartResult.forecastedSales}
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Model: {bigmartResult.model} (R²: {bigmartResult.r2Score}, RMSE: {bigmartResult.rmse})
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Preprocessing: {bigmartResult.imputer}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "parkwise" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Parking Duration (Hours):</label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={parkDuration}
                    onChange={(e) => setParkDuration(Number(e.target.value))}
                  />
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run Firefly Dynamic Pricing &amp; Reserve Slot
                </Button>
                {parkResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #c084fc" }}>
                    <div style={{ color: "#c084fc", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {parkResult.status} ({parkResult.calculatedPrice})
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                      Algorithm: {parkResult.algorithm}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      Auth: {parkResult.authMethod} • Double Booking Prevention Active
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "crop-rag" && (
              <div>
                <div className="row g-2 mb-2">
                  <div className="col-md-6">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Target Crop:</label>
                    <select
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      value={cropOption}
                      onChange={(e) => setCropOption(e.target.value)}
                    >
                      <option value="Tomato">Tomato (Solanum lycopersicum)</option>
                      <option value="Potato">Potato (Solanum tuberosum)</option>
                      <option value="Corn">Maize / Corn (Zea mays)</option>
                      <option value="Wheat">Wheat (Triticum aestivum)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Observed Leaf Symptoms:</label>
                    <select
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      value={cropSymptom}
                      onChange={(e) => setCropSymptom(e.target.value)}
                    >
                      <option value="Yellow leaf spots with dark halos">Yellow spots with concentric dark rings</option>
                      <option value="White powdery patches on surface">White powdery mildew fungal coat</option>
                      <option value="Brown wilting and leaf curl">Brown margin necrosis and leaf curl</option>
                    </select>
                  </div>
                </div>

                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run Hybrid RAG Advisory Query
                </Button>

                {cropResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #10b981" }}>
                    <div style={{ color: "#10b981", fontWeight: "bold", fontSize: "0.9rem" }}>
                      ✓ Diagnosis: {cropResult.disease} (Confidence: {cropResult.confidence})
                    </div>
                    <div style={{ fontSize: "0.82rem", marginTop: "4px" }}>
                      <strong>Recommended Treatment:</strong> {cropResult.treatment}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#c770f0", marginTop: "2px" }}>
                      <strong>Multilingual (Tamil):</strong> {cropResult.tamilAdvice}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "4px" }}>
                      Source: {cropResult.ragSource}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "yolo-midas" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Select Autonomous Navigation Frame:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={yoloFrame}
                    onChange={(e) => setYoloFrame(e.target.value)}
                  >
                    <option value="autonomous-road">Highway Dashcam Feed (High Speed)</option>
                    <option value="urban-crossroad">Urban Crossroad Pedestrian Corridor</option>
                    <option value="foggy-tunnel">Low-Light Tunnel with Obstacles</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run Dual ResNeXt101 Fusion Inference
                </Button>

                {yoloResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #00f5d4" }}>
                    <div style={{ color: "#00f5d4", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ⚡ Backbone: {yoloResult.backbone} • {yoloResult.latency}
                    </div>
                    <div className="mt-2" style={{ fontSize: "0.8rem" }}>
                      {yoloResult.detections.map((d, i) => (
                        <div key={i}>• Detected <strong>{d.class}</strong> ({d.confidence}) at depth <strong>{d.depth}</strong></div>
                      ))}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "4px" }}>
                      Depth Metric: {yoloResult.depthMapRange}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "uav-crowd" && (
              <div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Trigger UAV Drone Aerial Analytics
                </Button>
                {yoloResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #48cae4" }}>
                    <div style={{ color: "#48cae4", fontWeight: "bold", fontSize: "0.88rem" }}>
                      🛸 {yoloResult.frame} • Latency: {yoloResult.latency}
                    </div>
                    <div className="mt-2" style={{ fontSize: "0.8rem" }}>
                      {yoloResult.detections.map((d, i) => (
                        <div key={i}>• {d.class}: <strong>{d.depth}</strong></div>
                      ))}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#10b981", marginTop: "4px" }}>
                      Status: {yoloResult.depthMapRange}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "writing-ai" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Draft Text to Enhance:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={writingSample}
                    onChange={(e) => setWritingSample(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Target Tone Refinement:</label>
                  <div className="d-flex gap-2">
                    {["Professional", "Academic", "Creative"].map((t) => (
                      <Button
                        key={t}
                        size="sm"
                        variant={writingTone === t ? "secondary" : "outline-secondary"}
                        onClick={() => setWritingTone(t)}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Refine with RoBERTa &amp; BART
                </Button>

                {writingResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #ffd166" }}>
                    <div style={{ color: "#ffd166", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Enhanced ({writingResult.tone} Style)
                    </div>
                    <div style={{ fontSize: "0.85rem", marginTop: "4px", color: "#ffffff" }}>
                      "{writingResult.improved}"
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#10b981", marginTop: "4px" }}>
                      {writingResult.readabilityScore} • {writingResult.grammarErrorsFixed} grammar fixes
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "biometrics" && (
              <div>
                <Button size="sm" variant="primary" onClick={handleSimulate} disabled={bioScanning}>
                  <BsPlayFill /> {bioScanning ? "Analyzing Hand Contours..." : "Simulate Contactless Biometric Scan"}
                </Button>
                {bioResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #00f5d4" }}>
                    <div style={{ color: "#00f5d4", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {bioResult.status} ({bioResult.matchScore})
                    </div>
                    <div style={{ fontSize: "0.8rem", marginTop: "4px" }}>
                      User: <strong>{bioResult.user}</strong>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#c770f0", marginTop: "2px" }}>
                      Pipeline: {bioResult.featureVector} • {bioResult.encryption}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "inventory" && (
              <div>
                <div className="row g-2 mb-2">
                  <div className="col-8">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Inventory Item:</label>
                    <select
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      value={resItem}
                      onChange={(e) => setResItem(e.target.value)}
                    >
                      <option value="ESP32-IoT-Node">ESP32-WROOM-32 IoT Microcontroller</option>
                      <option value="Medical-Pill-Cartridge">Modular 7-Day Pill Cartridge</option>
                      <option value="Edge-Vision-Camera">OV2640 HD Optical Camera Module</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Qty:</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="form-control form-control-sm bg-dark text-white border-secondary"
                      value={resQty}
                      onChange={(e) => setResQty(Number(e.target.value))}
                    />
                  </div>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Test Real-time Atomic Reservation
                </Button>
                {resResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #64ffda" }}>
                    <div style={{ color: "#64ffda", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Reservation Confirmed: {resResult.reservationToken}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>
                      Allocated <strong>{resResult.reservedQuantity}</strong> unit(s) of <strong>{resResult.item}</strong>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa" }}>
                      Stock Remaining: {resResult.stockRemaining} • Synced at {resResult.syncTimestamp}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "iot-warehouse" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>RFID Badge Keycard:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={rfidCard}
                    onChange={(e) => setRfidCard(e.target.value)}
                  >
                    <option value="CARD-A849-01">Keycard #A849-01 (Admin / Authorized Engineer)</option>
                    <option value="CARD-B202-09">Keycard #B202-09 (Staff Operations)</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Swipe RFID Card &amp; Trigger ESP32
                </Button>
                {rfidResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #00e5ff" }}>
                    <div style={{ color: "#00e5ff", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ ACCESS GRANTED • {rfidResult.card}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>Zone: {rfidResult.accessZone}</div>
                    <div style={{ fontSize: "0.75rem", color: "#c770f0" }}>
                      Telemetry: {rfidResult.esp32Status} • {rfidResult.firebaseSync}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "autorename" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Input Document:</label>
                  <select
                    className="form-select form-select-sm bg-dark text-white border-secondary"
                    value={pdfSample}
                    onChange={(e) => setPdfSample(e.target.value)}
                  >
                    <option value="AcmeCorp_Invoice_2026.pdf">Scanned_Vendor_Invoice_001.pdf</option>
                    <option value="VIT_SE_Transcript.pdf">Academic_Report_Fall.pdf</option>
                  </select>
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run OCR Extraction &amp; Auto-Naming
                </Button>
                {pdfResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #ff477e" }}>
                    <div style={{ color: "#ff477e", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ Standardized Name: {pdfResult.suggestedNewName}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>
                      Extracted: <strong>{pdfResult.detectedCompany}</strong> ({pdfResult.documentType})
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa" }}>
                      Confidence: {pdfResult.ocrConfidence}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "ces-ai" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Prompt / Context Query:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={cesQuery}
                    onChange={(e) => setCesQuery(e.target.value)}
                  />
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Execute Counterfactual Embedding Search
                </Button>
                {cesResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #f72585" }}>
                    <div style={{ color: "#f72585", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ {cesResult.repairedEmbedding}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#10b981" }}>
                      Hallucination Metric: {cesResult.hallucinationRisk}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa" }}>
                      {cesResult.semanticConsistency}
                    </div>
                  </div>
                )}
              </div>
            )}

            {project.interactiveType === "noteshare" && (
              <div>
                <div className="mb-2">
                  <label style={{ fontSize: "0.8rem", color: "#c770f0" }}>Search Subject / Course Code:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-dark text-white border-secondary"
                    value={noteSearch}
                    onChange={(e) => setNoteSearch(e.target.value)}
                  />
                </div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Search Repository &amp; Notes
                </Button>
                {noteResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #c770f0" }}>
                    <div style={{ color: "#c770f0", fontWeight: "bold", fontSize: "0.88rem" }}>
                      📚 Search Results for "{noteResult.course}":
                    </div>
                    <div className="mt-2" style={{ fontSize: "0.8rem" }}>
                      {noteResult.matches.map((m, i) => (
                        <div key={i} className="mb-1">
                          • <strong>{m.title}</strong> — {m.rating} ⭐ ({m.downloads} downloads)
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* General fallback interactive playground */}
            {!["crop-rag", "yolo-midas", "uav-crowd", "writing-ai", "biometrics", "inventory", "iot-warehouse", "autorename", "ces-ai", "noteshare", "nlp-adversarial", "springboot-farm", "cloth-donation", "smart-lighting", "potato-cloud", "mango-hybrid", "secure-health-sftp", "prometheus-mlops", "bigmart-sales", "parkwise"].includes(project.interactiveType) && (
              <div>
                <Button size="sm" variant="primary" onClick={handleSimulate}>
                  <BsPlayFill /> Run System Benchmark &amp; Health Probe
                </Button>
                {cropResult && (
                  <div className="mt-3 p-2 rounded" style={{ background: "rgba(0,0,0,0.4)", borderLeft: "3px solid #c770f0" }}>
                    <div style={{ color: "#c770f0", fontWeight: "bold", fontSize: "0.88rem" }}>
                      ✓ System Status: {cropResult.systemStatus} (Latency: {cropResult.latency})
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>{cropResult.metrics}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer
        style={{
          borderTop: "1px solid rgba(199, 112, 240, 0.3)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <Button
          size="sm"
          variant="outline-light"
          onClick={copyClone}
          style={{ fontSize: "0.82rem" }}
        >
          {copied ? <BsCheckCircle color="#10b981" /> : <BsCopy />} &nbsp;
          {copied ? "Clone Command Copied!" : "Copy git clone"}
        </Button>

        <div className="d-flex gap-2">
          {project.demoLink && (
            <Button
              size="sm"
              variant="primary"
              href={project.demoLink}
              target="_blank"
              style={{ backgroundColor: "#623686", borderColor: "#623686" }}
            >
              <CgWebsite /> &nbsp; Launch Live Demo
            </Button>
          )}
          <Button
            size="sm"
            variant="primary"
            href={project.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp; View GitHub Repo
          </Button>
          <Button size="sm" variant="secondary" onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
