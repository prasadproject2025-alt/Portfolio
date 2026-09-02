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
            I am pursuing my <span className="purple">Integrated M.Tech in Software Engineering</span>{" "}
            at <span className="purple">Vellore Institute of Technology (VIT)</span> with a CGPA of <span className="purple">8.64 / 10</span> (Expected Graduation: 2027).
            <br />
            I am also actively training in the <span className="purple">NxtWave CCBP 4.0 Industry Ready Software Development Program</span> and a member of the <span className="purple">TBI Technology Business Incubator</span> at VIT.
            <br />
            <br />
            Key highlights of my background and academic achievements include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Published IEEE Research Paper: <i>"Enhancing Writing Quality with AI: A Multi-Model Approach"</i> (92.3% Grammar &amp; 89.1% Genre Accuracy).
            </li>
            <li className="about-activity">
              <ImPointRight /> Published 5 Patents granted/published by the Indian Patent Office (IPO).
            </li>
            <li className="about-activity">
              <ImPointRight /> Built &amp; deployed <b>NoteShare</b> academic marketplace serving <b>2,000+ users</b> in the MIS department.
            </li>
            <li className="about-activity">
              <ImPointRight /> Member of TBI (Technology Business Incubator) at VIT &amp; active hackathon builder.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "15px" }}>
            "Strive to build scalable systems that solve real-world challenges!"{" "}
          </p>
          <footer className="blockquote-footer">Durga Prasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;