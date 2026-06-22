import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            <p className="home-about-body">
              I’m a Software Engineering student who loves transforming ideas into
              scalable applications and intelligent systems. Over time, I’ve built a strong foundation in 
              full-stack development, applied machine learning, and generative AI.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, c++, JavaScript (ES6+), and SQL{" "}
                </b>
              </i>
              — and I enjoy working across both frontend/backend stacks and AI model deployment.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Scalable Web Applications, Applied Machine Learning, and Generative AI Solutions,{" "}
                </b>
              </i>
              and exploring new ways to integrate NLP and biometric systems into everyday tools.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python </b> and modern frameworks/libraries like{" "} 
              <i>
                <b className="purple">React.js, TensorFlow,</b> and{" "}
                <b className="purple">PyTorch</b>. 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;