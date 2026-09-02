import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsEye, BsCheckCircle, BsCopy } from "react-icons/bs";
import Particle from "../Particle";
import CertificationsModal from "./CertificationsModal";

// High Definition Certificate Visual Assets
import certNxtWaveImg from "../../Assets/Certifications/cert-nxtwave.svg";
import certDeepLearningImg from "../../Assets/Certifications/cert-deeplearning.svg";
import certGenAiImg from "../../Assets/Certifications/cert-genai.svg";
import certAwsImg from "../../Assets/Certifications/cert-aws.svg";
import certIotImg from "../../Assets/Certifications/cert-iot.svg";
import certSqlImg from "../../Assets/Certifications/cert-sql.svg";
import certCyberSecImg from "../../Assets/Certifications/cert-cybersec.svg";
import certMlopsImg from "../../Assets/Certifications/cert-mlops.svg";

export const certificationsData = [
  {
    id: "cert-nxtwave",
    title: "NxtWave CCBP 4.0 Industry Ready Software Engineer",
    issuer: "NxtWave CCBP 4.0 Academy",
    category: "Full Stack",
    issueDate: "2025",
    credentialId: "NXT-CCBP-2025-DP41",
    imgPath: certNxtWaveImg,
    description: "Comprehensive software engineering program mastering full-stack web development, data structures, algorithms, database management systems, clean architecture, and modern JavaScript / React frameworks.",
    skills: ["Full Stack Web", "React.js", "Python", "Node.js", "SQL", "REST APIs", "Clean Code"]
  },
  {
    id: "cert-deeplearning",
    title: "Deep Learning & Computer Vision Specialization",
    issuer: "DeepLearning.AI / Kaggle",
    category: "AI & ML",
    issueDate: "2025",
    credentialId: "DL-CV-849201",
    imgPath: certDeepLearningImg,
    description: "Advanced specialization covering Convolutional Neural Networks (CNNs), PyTorch, object detection architectures (YOLOv3 / YOLOv8), monocular depth estimation (MiDaS), Otsu segmentation, and spatial feature extraction.",
    skills: ["Convolutional Neural Networks", "PyTorch", "YOLOv8", "MiDaS Depth", "OpenCV", "Segmentation"]
  },
  {
    id: "cert-genai",
    title: "Generative AI & Large Language Models (LLM) Engineering",
    issuer: "Hugging Face / DeepLearning.AI",
    category: "AI & ML",
    issueDate: "2025",
    credentialId: "GENAI-LLM-991204",
    imgPath: certGenAiImg,
    description: "Engineering specialization covering Retrieval-Augmented Generation (RAG) architectures, Transformer models (BERT, RoBERTa, BART), vector embeddings, hallucination mitigation, and Google Gemini API integration.",
    skills: ["Hybrid RAG", "Transformers", "Google Gemini API", "Vector Databases", "Prompt Engineering", "NLP"]
  },
  {
    id: "cert-aws",
    title: "AWS Certified Cloud Foundations & Deployment",
    issuer: "Amazon Web Services (AWS)",
    category: "Full Stack",
    issueDate: "2025",
    credentialId: "AWS-CP-2025-DP",
    imgPath: certAwsImg,
    description: "AWS cloud architecture certification covering EC2 instance deployment, S3 bucket storage, serverless compute with AWS Lambda, REST endpoints with AWS API Gateway, IAM security, and cloud scalability.",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "API Gateway", "Cloud Security", "Virtual Machine Hosting"]
  },
  {
    id: "cert-iot",
    title: "IoT & Embedded Hardware Security Certification",
    issuer: "Vellore Institute of Technology (VIT)",
    category: "Security & IoT",
    issueDate: "2024",
    credentialId: "VIT-IOT-SEC-401",
    imgPath: certIotImg,
    description: "Hands-on certification in microcontroller programming (ESP32 / ESP8266), RFID access control, sensor integration (PIR, LDR, load cells), Firebase Realtime Database telemetry, and Blynk IoT platforms.",
    skills: ["ESP32 / ESP8266", "RFID RC522", "Firebase Realtime DB", "Blynk IoT", "C++ Firmware", "Sensors"]
  },
  {
    id: "cert-sql",
    title: "PostgreSQL & Database Architecture Certification",
    issuer: "HackerRank / Oracle",
    category: "Full Stack",
    issueDate: "2024",
    credentialId: "SQL-DB-782109",
    imgPath: certSqlImg,
    description: "Advanced database engineering certification covering relational database schema design, index optimization, complex SQL queries, transactions, and object-relational mapping (ORM) with Hibernate JPA.",
    skills: ["PostgreSQL", "SQL Optimization", "Relational Schemas", "Transactions", "Hibernate JPA", "Security"]
  },
  {
    id: "cert-cybersec",
    title: "Cybersecurity & Cryptography Certification (AES & RSA)",
    issuer: "IEEE Security / Cybrary",
    category: "Security & IoT",
    issueDate: "2025",
    credentialId: "CYBER-SEC-3321",
    imgPath: certCyberSecImg,
    description: "Software security certification covering symmetric AES-256 (CBC/Fernet) encryption, asymmetric 2048-bit RSA key exchanges, SHA-256/SHA-512 cryptographic hashing, E2EE, and Role-Based Access Control.",
    skills: ["AES-256 Encryption", "2048-bit RSA", "Cryptographic Hashing", "E2EE", "Paramiko SFTP", "RBAC"]
  },
  {
    id: "cert-mlops",
    title: "MLOps Infrastructure & Prometheus Observability",
    issuer: "Linux Foundation / Prometheus",
    category: "Full Stack",
    issueDate: "2025",
    credentialId: "MLOPS-PROM-102",
    imgPath: certMlopsImg,
    description: "DevOps certification for machine learning production deployments. Covers Prometheus time-series metric exporters (/metrics Port 8000), Grafana dashboards, Alertmanager, and Docker containerization.",
    skills: ["Prometheus", "Grafana", "Alertmanager", "Docker", "MLOps Metrics", "Continuous Monitoring"]
  }
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const categories = ["All", "Full Stack", "AI & ML", "Security & IoT"];

  const filteredCerts = activeCategory === "All"
    ? certificationsData
    : certificationsData.filter(c => c.category === activeCategory);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Verified <strong className="purple">Certifications &amp; Accreditations 🏆</strong>
        </h1>
        <p style={{ color: "white" }}>
          Official credentials, industry accreditations, and technical competency certificates.
        </p>

        {/* Filter Category Tabs */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "primary" : "outline-secondary"}
              onClick={() => setActiveCategory(cat)}
              style={{ fontWeight: "bold", borderRadius: "20px", padding: "6px 18px" }}
            >
              {cat === "All" ? "All Credentials" : cat}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {filteredCerts.map((cert) => (
            <Col key={cert.id} md={6} className="project-card">
              <Card className="project-card-view" style={{ border: "1px solid rgba(199, 112, 240, 0.45)", background: "rgba(22, 16, 42, 0.85)" }}>
                {/* High Definition Certificate Image Preview */}
                <div style={{ padding: "12px", cursor: "pointer", overflow: "hidden" }} onClick={() => setSelectedCert(cert)}>
                  <Card.Img
                    variant="top"
                    src={cert.imgPath}
                    alt={cert.title}
                    style={{
                      borderRadius: "8px",
                      border: "1px solid rgba(199, 112, 240, 0.3)",
                      transition: "transform 0.4s ease",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.5)"
                    }}
                  />
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="mb-2 d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <Badge bg="primary" style={{ backgroundColor: "#623686 !important", fontWeight: "bold" }}>
                      {cert.issuer}
                    </Badge>
                    <Badge bg="dark" style={{ border: "1px solid rgba(199, 112, 240, 0.5)", color: "#c770f0", fontSize: "0.8rem" }}>
                      ID: {cert.credentialId}
                    </Badge>
                  </div>

                  <Card.Title
                    style={{ cursor: "pointer", fontSize: "1.15rem", fontWeight: "bold", color: "#ffffff" }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    {cert.title}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "justify", flexGrow: 1, fontSize: "0.9rem", color: "#cbd5e1" }}>
                    {cert.description}
                  </Card.Text>

                  <div className="mb-3">
                    {cert.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="tech-pill">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid rgba(199, 112, 240, 0.2)" }} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline-light"
                      onClick={() => handleCopy(cert.credentialId)}
                      style={{ fontSize: "0.8rem" }}
                    >
                      {copiedId === cert.credentialId ? <BsCheckCircle color="#10b981" /> : <BsCopy />} &nbsp;
                      {copiedId === cert.credentialId ? "ID Copied!" : "Copy Credential ID"}
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => setSelectedCert(cert)}
                      style={{ fontWeight: "bold", backgroundColor: "#623686", borderColor: "#623686" }}
                    >
                      <BsEye /> &nbsp; Inspect Certificate
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Interactive Certifications Modal */}
      <CertificationsModal
        show={!!selectedCert}
        onHide={() => setSelectedCert(null)}
        cert={selectedCert}
      />
    </Container>
  );
}

export default Certifications;
