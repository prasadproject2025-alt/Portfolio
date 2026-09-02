import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import Particle from "../Particle";
import PatentModal from "./PatentModal";

// Patent SVG visual assets
import queryPatentImg from "../../Assets/Patents/patent-query-repair.svg";
import lockerPatentImg from "../../Assets/Patents/patent-edge-locker.svg";
import hyperPatentImg from "../../Assets/Patents/patent-hyperhidrosis.svg";
import mosquitoPatentImg from "../../Assets/Patents/patent-mosquito-dispenser.svg";

export const patentsData = [
  {
    id: "patent-query",
    appNo: "202641007487",
    title: "SYSTEM FOR REPAIRING AMBIGUOUS USER QUERIES USING COUNTERFACTUAL EMBEDDING RANKING",
    field: "COMPUTER SCIENCE",
    filingDate: "26/01/2026",
    publicationDate: "13/02/2026",
    examinationDate: "04/02/2026",
    appType: "ORDINARY APPLICATION",
    applicant: "Vellore Institute of Technology",
    email: "legal@danielandgladys.in",
    additionalEmail: "iprvit@vit.ac.in",
    imgPath: queryPatentImg,
    summary: "Invention relates to an automated query repair architecture. Detects semantic ambiguity in user input queries and applies counterfactual dense embedding ranking to restore search groundedness and intent resolution.",
    interactiveTitle: "Ambiguous Query Repair & Latent Space Simulator"
  },
  {
    id: "patent-locker",
    appNo: "202641007481",
    title: "A SYSTEM FOR AUTONOMOUS EDGE-CONTROLLED LOCKER AND CLOAKROOM MANAGEMENT",
    field: "ELECTRONICS",
    filingDate: "26/01/2026",
    publicationDate: "13/02/2026",
    examinationDate: "04/02/2026",
    appType: "ORDINARY APPLICATION",
    applicant: "Vellore Institute of Technology",
    email: "legal@danielandgladys.in",
    additionalEmail: "iprvit@vit.ac.in",
    imgPath: lockerPatentImg,
    summary: "System for automated, edge-controlled luggage and locker unit allocation. Utilizes microcontrollers, offline token fallback, OTP handshake, and solenoid latch telemetry for high-security transit hubs.",
    interactiveTitle: "Edge-Controlled Lock Allocation & Telemetry Simulator"
  },
  {
    id: "patent-hyperhidrosis",
    appNo: "202641009563",
    title: "A SYSTEM FOR NON-INVASIVE QUANTITATIVE ASSESSMENT OF PALMAR HYPERHIDROSIS USING COMPUTER VISION",
    field: "BIO-MEDICAL ENGINEERING",
    filingDate: "30/01/2026",
    publicationDate: "13/02/2026",
    examinationDate: "04/02/2026",
    appType: "ORDINARY APPLICATION",
    applicant: "Vellore Institute of Technology",
    email: "legal@danielandgladys.in",
    additionalEmail: "iprvit@vit.ac.in",
    imgPath: hyperPatentImg,
    summary: "Non-invasive biomedical computer vision system quantifying palmar hyperhidrosis severity. Processes optical palm scans via HSV color segmentation and pore moisture density algorithms to yield objective diagnostic indices.",
    interactiveTitle: "Computer Vision Palmar Sweat Severity Simulator"
  },
  {
    id: "patent-mosquito",
    appNo: "202641009539",
    title: "AN APPARATUS FOR REAL-TIME MOSQUITO DETECTION AND ADAPTIVE REPELLENT DISPENSING METHOD",
    field: "PHYSICS / EMBEDDED SYSTEMS",
    filingDate: "30/01/2026",
    publicationDate: "13/02/2026",
    examinationDate: "24/02/2026",
    appType: "ORDINARY APPLICATION",
    applicant: "VELLORE INSTITUTE OF TECHNOLOGY",
    email: "ipr.elpisanalytix@gmail.com",
    additionalEmail: "elpisanalytix17@gmail.com",
    imgPath: mosquitoPatentImg,
    summary: "Apparatus and adaptive method detecting mosquito presence in real time via acoustic frequency analysis and optical vision, automatically triggering targeted repellent dispensing pulses for smart vector control.",
    interactiveTitle: "Acoustic Detection & Repellent Mist Pulse Simulator"
  }
];

function Patents() {
  const [selectedPatent, setSelectedPatent] = useState(null);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Published <strong className="purple">Patents </strong> 📜
        </h1>
        <p style={{ color: "white" }}>
          Official Intellectual Property &amp; Patents Published U/S 11A by the Indian Patent Office (IPO).
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {patentsData.map((patent) => (
            <Col key={patent.id} md={6} className="project-card">
              <Card className="project-card-view" style={{ border: "1px solid rgba(245, 158, 11, 0.45)" }}>
                <div style={{ cursor: "pointer" }} onClick={() => setSelectedPatent(patent)}>
                  <Card.Img variant="top" src={patent.imgPath} alt={patent.title} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2 d-flex flex-wrap gap-2">
                    <Badge bg="warning" text="dark" style={{ fontWeight: "bold" }}>
                      PUBLISHED U/S 11A
                    </Badge>
                    <Badge bg="dark" style={{ border: "1px solid rgba(245, 158, 11, 0.5)", color: "#fbbf24" }}>
                      App No: {patent.appNo}
                    </Badge>
                    <Badge bg="secondary">
                      {patent.field}
                    </Badge>
                  </div>

                  <Card.Title
                    style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: "bold" }}
                    onClick={() => setSelectedPatent(patent)}
                  >
                    {patent.title}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "justify", flexGrow: 1, fontSize: "0.9rem" }}>
                    {patent.summary}
                  </Card.Text>

                  <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid rgba(199, 112, 240, 0.2)" }} className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span style={{ fontSize: "0.8rem", color: "#a7f3d0" }}>
                      📅 Filing: {patent.filingDate} | Publ: {patent.publicationDate}
                    </span>

                    <Button
                      variant="warning"
                      onClick={() => setSelectedPatent(patent)}
                      style={{ fontWeight: "bold" }}
                    >
                      <BsEye /> &nbsp; Inspect Patent Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Interactive Patent Inspector Modal */}
      <PatentModal
        show={!!selectedPatent}
        onHide={() => setSelectedPatent(null)}
        patent={selectedPatent}
      />
    </Container>
  );
}

export default Patents;
