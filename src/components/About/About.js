import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { BsAward, BsJournalBookmark, BsShieldCheck } from "react-icons/bs";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* Profile Introduction Section */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* Professional Categorized Skillset */}
          <h1 className="project-heading" style={{ marginBottom: "25px" }}>
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />

          {/* Tools & Platforms */}
          <h1 className="project-heading" style={{ marginTop: "40px", marginBottom: "25px" }}>
            <strong className="purple">Tools</strong> &amp; Platforms I Use
          </h1>
          <Toolstack />

          {/* Embedded Certifications & Accreditations Preview Section */}
          <Row className="mt-5 mb-4">
            <Col md={12}>
              <Card className="project-card-view p-4" style={{ border: "1px solid rgba(199, 112, 240, 0.4)", background: "rgba(26, 17, 48, 0.85)" }}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                    <h2 style={{ fontSize: "1.8em", color: "white", margin: 0 }}>
                      Verified <strong className="purple">Certifications &amp; Accreditations</strong> 🏆
                    </h2>
                    <Button variant="primary" href="/certifications" style={{ fontWeight: "bold" }}>
                      <BsAward /> &nbsp; View All 8 Certifications
                    </Button>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                    Industry accreditations from <b>NxtWave CCBP 4.0</b>, <b>DeepLearning.AI</b>, <b>Hugging Face</b>, <b>AWS Cloud</b>, <b>VIT IoT Security</b>, and <b>IEEE</b>.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Embedded Patents & IEEE Publications Preview Section */}
          <Row className="mb-5">
            <Col md={6} className="mb-3">
              <Card className="project-card-view p-3" style={{ border: "1px solid rgba(245, 158, 11, 0.45)" }}>
                <Card.Body>
                  <h3 style={{ color: "#fbbf24", fontSize: "1.3rem", fontWeight: "bold" }}>
                    📜 5 Published Patents
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#e2e8f0" }}>
                    Granted &amp; published U/S 11A by the Indian Patent Office (IPO) across Computer Science, Electronics, Bio-Medical, and Physics.
                  </p>
                  <Button variant="warning" href="/patents" size="sm" style={{ fontWeight: "bold" }}>
                    <BsShieldCheck /> Inspect Published Patents
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="project-card-view p-3" style={{ border: "1px solid rgba(56, 189, 248, 0.45)" }}>
                <Card.Body>
                  <h3 style={{ color: "#38bdf8", fontSize: "1.3rem", fontWeight: "bold" }}>
                    📚 IEEE Conference Paper
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#e2e8f0" }}>
                    <i>"Enhancing Writing Quality with AI: A Multi-Model Approach"</i> — Published on IEEE Xplore (Doc ID: 11452396).
                  </p>
                  <Button variant="info" href="/publications" size="sm" style={{ fontWeight: "bold" }}>
                    <BsJournalBookmark /> View IEEE Publication
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* GitHub Activity Calendar */}
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
