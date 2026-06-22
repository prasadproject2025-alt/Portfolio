import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">S Durga Prasad</span>{" "}
            from <span className="purple">Vellore, India</span>.
            <br />
            I am currently a <span className="purple">Software Engineering student</span>{" "}
            training in the <span className="purple">NxtWave CCBP 4.0 Industry Ready Software Development Program</span>.
            <br />I am pursuing my <span className="purple">M.Tech (Integrated) Software Engineering</span>{" "}
            at the <span className="purple">Vellore Institute of Technology</span>.
            <br />
            <br />
            Outside of my core academic curriculum, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing scalable full-stack web applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Building robust AI and ML proofs-of-concept 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing clean coding and collaborative debugging 🛠️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Durga Prasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;