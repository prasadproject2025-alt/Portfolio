import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I am an <b className="purple">Integrated M.Tech Software Engineering student at VIT (CGPA: 8.64/10)</b> and a passionate developer trained in the <b className="purple">NxtWave CCBP 4.0 Industry Ready Software Development Program</b>.
              <br />
              <br />
              I specialize in building scalable cloud-native web solutions using:
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C++, JavaScript (React.js, Flask), and SQL / NoSQL Databases.{" "}
                </b>
              </i>
              <br />
              <br />
              My core areas of engineering expertise include:
              <i>
                <b className="purple">
                  {" "}
                  Software System Architecture, Microservices, Applied Machine Learning, Generative AI (LLMs &amp; Hybrid RAG), and Hardware Security / IoT.{" "}
                </b>
              </i>
              <br />
              <br />
              I have authored <b className="purple">5 Published Patents</b> with the Indian Patent Office (IPO), an <b className="purple">IEEE Conference Publication</b> on AI-powered multi-model text enhancement, and built the <b className="purple">NoteShare platform serving 2,000+ users</b> in the MIS department.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Profile Highlights & Metrics Cards */}
        <Row className="mt-5 justify-content-center">
          <Col md={12} className="text-center mb-4">
            <h2 style={{ fontSize: "2.1em", color: "white" }}>
              Key Profile <span className="purple">Highlights &amp; Impact</span>
            </h2>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>8.64 / 10</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Integrated M.Tech CGPA</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  Vellore Institute of Technology (VIT) • Software Engineering (2022–2027)
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>2,000+</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Active Platform Users</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  NoteShare Academic Marketplace deployed across MIS department
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>5 Patents</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Indian Patent Office (IPO)</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  Published U/S 11A in CS, Electronics, Bio-Medical &amp; Physics
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>1 IEEE Paper</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>IEEE Xplore Publication</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  92.3% Grammar &amp; 89.1% Genre Accuracy (Document ID: 11452396)
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>NxtWave CCBP</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Industry Ready Software Program</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  Full-Stack, Data Structures, Algorithms &amp; SQL Query Optimization
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="project-card-view p-3" style={{ border: "1px solid rgba(199, 112, 240, 0.4)" }}>
              <Card.Body className="text-center">
                <h2 style={{ color: "#c770f0", fontWeight: "bold" }}>VIT TBI</h2>
                <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Incubator Member</h6>
                <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
                  Technology Business Incubator member &amp; Hackathon builder
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;