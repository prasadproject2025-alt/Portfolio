import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsJournalBookmark, BsCopy, BsCheckCircle, BsEye } from "react-icons/bs";
import Particle from "../Particle";

// Visual Banner for IEEE Paper
import ieeeBannerImg from "../../Assets/Publications/ieee-paper-banner.svg";

// Patent SVG Assets
import queryPatentImg from "../../Assets/Patents/patent-query-repair.svg";
import lockerPatentImg from "../../Assets/Patents/patent-edge-locker.svg";
import hyperPatentImg from "../../Assets/Patents/patent-hyperhidrosis.svg";
import mosquitoPatentImg from "../../Assets/Patents/patent-mosquito-dispenser.svg";

function Publications() {
  const [copiedBib, setCopiedBib] = useState(false);

  const bibtexCitation = `@inproceedings{durga2025enhancing,
  title={Enhancing Writing Quality with AI: A Multi-Model Approach},
  author={S Durga Prasad et al.},
  booktitle={IEEE International Conference Publications},
  year={2025},
  publisher={IEEE},
  doi={10.1109/IEEE.2025.11452396}
}`;

  const copyBibtex = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications &amp; Patents 📚</strong>
        </h1>
        <p style={{ color: "white" }}>
          Peer-reviewed IEEE Conference Publications and Published Patents from the Indian Patent Office (IPO).
        </p>

        {/* IEEE Conference Paper Featured Section */}
        <Row className="mb-5">
          <Col md={12}>
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(56, 189, 248, 0.6)", background: "rgba(12, 25, 46, 0.9)" }}>
              {/* High Definition IEEE Paper Banner */}
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img
                  src={ieeeBannerImg}
                  alt="IEEE Xplore Paper Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "340px",
                    borderRadius: "10px",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.6)"
                  }}
                />
              </div>

              <Card.Body>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                  <Badge bg="info" text="dark" style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
                    IEEE CONFERENCE PUBLICATION
                  </Badge>
                  <span style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "bold" }}>
                    IEEE Xplore Document ID: 11452396
                  </span>
                </div>

                <Card.Title style={{ fontSize: "1.45rem", fontWeight: "bold", color: "#ffffff" }}>
                  Enhancing Writing Quality with AI: A Multi-Model Approach
                </Card.Title>

                <Card.Text style={{ textAlign: "justify", marginTop: "12px", fontSize: "0.95rem", color: "#cbd5e1" }}>
                  Conducted comprehensive model benchmarking reports demonstrating measurable improvements in target Natural Language Processing (NLP) tasks. Achieved <strong>92.3% Grammar Correction Accuracy</strong> and <strong>89.1% Genre Classification Accuracy</strong> through rigorous dataset curation, prompt engineering, and multi-model benchmarking (BART-MNLI, Meta LLaMA 3.3, Cohere API, LanguageTool).
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-4">
                  <div className="d-flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline-info" onClick={copyBibtex} style={{ fontSize: "0.82rem" }}>
                      {copiedBib ? <BsCheckCircle color="#10b981" /> : <BsCopy />} &nbsp;
                      {copiedBib ? "BibTeX Copied!" : "Copy BibTeX Citation"}
                    </Button>
                  </div>

                  <Button
                    variant="info"
                    href="https://ieeexplore.ieee.org/document/11452396"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: "bold" }}
                  >
                    <BsJournalBookmark /> &nbsp; View Official Paper on IEEE Xplore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Published Patent Applications Grid Header */}
        <h2 style={{ fontSize: "1.8em", color: "white", marginBottom: "20px" }}>
          Published <strong className="purple">Patent Applications 📜</strong>
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(245, 158, 11, 0.45)" }}>
              <div style={{ padding: "10px" }}>
                <Card.Img variant="top" src={queryPatentImg} alt="Patent 202641007487" style={{ borderRadius: "8px" }} />
              </div>
              <Card.Body>
                <Badge bg="warning" text="dark" className="mb-2">PATENT #202641007487</Badge>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  System for Repairing Ambiguous User Queries Using Counterfactual Embedding Ranking
                </Card.Title>
                <Card.Text style={{ fontSize: "0.88rem", textAlign: "justify", color: "#cbd5e1" }}>
                  Automated query repair architecture detecting semantic ambiguity and applying counterfactual dense embedding ranking for search intent resolution.
                </Card.Text>
                <Button variant="warning" href="/patents" size="sm" style={{ fontWeight: "bold", width: "100%" }}>
                  <BsEye /> Inspect Patent Record &amp; Claims
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(56, 189, 248, 0.45)" }}>
              <div style={{ padding: "10px" }}>
                <Card.Img variant="top" src={lockerPatentImg} alt="Patent 202641007481" style={{ borderRadius: "8px" }} />
              </div>
              <Card.Body>
                <Badge bg="info" text="dark" className="mb-2">PATENT #202641007481</Badge>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Autonomous Edge-Controlled Locker and Cloakroom Management System
                </Card.Title>
                <Card.Text style={{ fontSize: "0.88rem", textAlign: "justify", color: "#cbd5e1" }}>
                  System for edge-controlled luggage allocation using microcontrollers, offline token fallback, OTP handshake, and solenoid latch telemetry.
                </Card.Text>
                <Button variant="info" href="/patents" size="sm" style={{ fontWeight: "bold", width: "100%" }}>
                  <BsEye /> Inspect Patent Record &amp; Claims
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(236, 72, 153, 0.45)" }}>
              <div style={{ padding: "10px" }}>
                <Card.Img variant="top" src={hyperPatentImg} alt="Patent 202641009563" style={{ borderRadius: "8px" }} />
              </div>
              <Card.Body>
                <Badge bg="danger" className="mb-2">PATENT #202641009563</Badge>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Non-Invasive Palmar Hyperhidrosis Computer Vision Assessment System
                </Card.Title>
                <Card.Text style={{ fontSize: "0.88rem", textAlign: "justify", color: "#cbd5e1" }}>
                  Biomedical computer vision system quantifying palmar hyperhidrosis severity via HSV color segmentation and pore moisture density algorithms.
                </Card.Text>
                <Button variant="danger" href="/patents" size="sm" style={{ fontWeight: "bold", width: "100%" }}>
                  <BsEye /> Inspect Patent Record &amp; Claims
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(16, 185, 129, 0.45)" }}>
              <div style={{ padding: "10px" }}>
                <Card.Img variant="top" src={mosquitoPatentImg} alt="Patent 202641009539" style={{ borderRadius: "8px" }} />
              </div>
              <Card.Body>
                <Badge bg="success" className="mb-2">PATENT #202641009539</Badge>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Real-Time Mosquito Detection &amp; Adaptive Repellent Dispenser
                </Card.Title>
                <Card.Text style={{ fontSize: "0.88rem", textAlign: "justify", color: "#cbd5e1" }}>
                  Apparatus detecting mosquito presence in real time via acoustic frequency analysis and optical vision, automatically triggering ultrasonic repellent pulses.
                </Card.Text>
                <Button variant="success" href="/patents" size="sm" style={{ fontWeight: "bold", width: "100%" }}>
                  <BsEye /> Inspect Patent Record &amp; Claims
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
