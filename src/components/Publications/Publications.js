import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsJournalBookmark, BsShieldCheck, BsAward, BsCheckCircle } from "react-icons/bs";
import Particle from "../Particle";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications &amp; Achievements </strong> 📚
        </h1>
        <p style={{ color: "white" }}>
          IEEE Conference Papers, Published Patents, Incubator Memberships &amp; Academic Programs.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {/* IEEE Publication Card */}
          <Col md={12} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(56, 189, 248, 0.5)", background: "rgba(12, 25, 46, 0.85)" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                  <Badge bg="info" text="dark" style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
                    IEEE CONFERENCE PUBLICATION
                  </Badge>
                  <span style={{ fontSize: "0.85rem", color: "#a7f3d0" }}>
                    IEEE Xplore Document ID: 11452396
                  </span>
                </div>

                <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#ffffff" }}>
                  Enhancing Writing Quality with AI: A Multi-Model Approach
                </Card.Title>

                <Card.Text style={{ textAlign: "justify", marginTop: "10px", fontSize: "0.95rem", color: "#cbd5e1" }}>
                  Conducted comprehensive model benchmarking reports demonstrating measurable improvements in target Natural Language Processing (NLP) tasks. Achieved <strong>92.3% Grammar Correction Accuracy</strong> and <strong>89.1% Genre Classification Accuracy</strong> through rigorous dataset curation, prompt engineering, and multi-model benchmarking (BART-MNLI, LLaMA 3.3, Cohere, LanguageTool).
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3">
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="tech-pill">✓ 92.3% Grammar Accuracy</span>
                    <span className="tech-pill">✓ 89.1% Genre Accuracy</span>
                    <span className="tech-pill">✓ Multi-Model NLP</span>
                  </div>

                  <Button
                    variant="info"
                    href="https://ieeexplore.ieee.org/document/11452396"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: "bold" }}
                  >
                    <BsJournalBookmark /> &nbsp; View on IEEE Xplore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Patents Card Summary */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(245, 158, 11, 0.45)" }}>
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge bg="warning" text="dark" style={{ fontWeight: "bold" }}>
                    5 PUBLISHED PATENTS
                  </Badge>
                  <span style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Indian Patent Office (IPO)</span>
                </div>
                <Card.Title style={{ fontSize: "1.15rem", fontWeight: "bold" }}>
                  Intellectual Property &amp; Patent Filings
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem", textAlign: "justify", flexGrow: 1 }}>
                  Authored and published 5 patents in Computer Science, Electronics, Bio-Medical Engineering, and Physics (App Nos: 202641007487, 202641007481, 202641009563, 202641009539, etc.).
                </Card.Text>
                <div className="mt-3">
                  <Button variant="warning" href="/patents" style={{ fontWeight: "bold", width: "100%" }}>
                    <BsShieldCheck /> &nbsp; View Published Patent Records
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Training & Programs Card */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(199, 112, 240, 0.45)" }}>
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge bg="primary" style={{ backgroundColor: "#623686 !important" }}>
                    NXTWAVE CCBP 4.0
                  </Badge>
                  <span style={{ fontSize: "0.8rem", color: "#c770f0" }}>Sept 2023 – Present</span>
                </div>
                <Card.Title style={{ fontSize: "1.15rem", fontWeight: "bold" }}>
                  Industry Ready Software Development Program
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem", textAlign: "justify", flexGrow: 1 }}>
                  Mastered core CS principles including Data Structures, Algorithms, DBMS, and SQL query optimization. Practiced Agile sprints, code reviews, and API schema design.
                </Card.Text>
                <div className="mt-3">
                  <Button variant="outline-light" href="/certifications" style={{ fontWeight: "bold", width: "100%" }}>
                    <BsAward /> &nbsp; View Credentials &amp; Badges
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Academic & Incubator Achievements */}
          <Col md={12} className="mb-4">
            <Card className="project-card-view" style={{ border: "1px solid rgba(16, 185, 129, 0.45)", background: "rgba(10, 33, 24, 0.85)" }}>
              <Card.Body>
                <h5 style={{ color: "#10b981", fontWeight: "bold" }}>
                  🏆 Academic Honors &amp; Entrepreneurship Incubator
                </h5>
                <Row className="mt-3">
                  <Col md={6}>
                    <p style={{ fontSize: "0.92rem", marginBottom: "8px" }}>
                      <BsCheckCircle color="#10b981" /> <strong>Integrated M.Tech Software Engineering (VIT):</strong> Maintaining a <strong>CGPA of 8.64 / 10</strong>.
                    </p>
                    <p style={{ fontSize: "0.92rem", marginBottom: "8px" }}>
                      <BsCheckCircle color="#10b981" /> <strong>TBI Incubator Member:</strong> Member of Technology Business Incubator (TBI) at VIT.
                    </p>
                  </Col>
                  <Col md={6}>
                    <p style={{ fontSize: "0.92rem", marginBottom: "8px" }}>
                      <BsCheckCircle color="#10b981" /> <strong>Hackathon Builder:</strong> Active participant in AI &amp; Software Engineering Hackathons.
                    </p>
                    <p style={{ fontSize: "0.92rem", marginBottom: "8px" }}>
                      <BsCheckCircle color="#10b981" /> <strong>Production Impact:</strong> Delivered NoteShare marketplace serving <strong>2,000+ users</strong>.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
