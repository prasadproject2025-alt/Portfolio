import React from "react";
import { Row, Col } from "react-bootstrap";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiHtml5, 
  SiFlask,
  SiKubernetes,
  SiAmazonaws,
  SiFirebase,
  SiScikitlearn,
  SiMysql,
  SiSpringboot
} from "react-icons/si";
import { BsRobot, BsCpu, BsDatabaseCheck, BsCodeSquare, BsDiagram3 } from "react-icons/bs";

import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  return (
    <div style={{ paddingBottom: "30px" }}>
      {/* Group 1: Programming & Core Languages */}
      <div className="mb-4">
        <h3 style={{ color: "#c770f0", fontSize: "1.35rem", fontWeight: "bold", textAlign: "left", marginBottom: "15px" }}>
          <BsCodeSquare /> &nbsp; Programming Languages
        </h3>
        <Row style={{ justifyContent: "flex-start" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Python} alt="Python" />
            <div className="tech-icons-text">Python</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Java} alt="Java" />
            <div className="tech-icons-text">Java 17+</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={C} alt="C++" />
            <div className="tech-icons-text">C / C++</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Javascript} alt="JavaScript" />
            <div className="tech-icons-text">JavaScript (ES6+)</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={SQL} alt="SQL" />
            <div className="tech-icons-text">SQL / PostgreSQL</div>
          </Col>
        </Row>
      </div>

      {/* Group 2: Web & Backend Development */}
      <div className="mb-4">
        <h3 style={{ color: "#c770f0", fontSize: "1.35rem", fontWeight: "bold", textAlign: "left", marginBottom: "15px" }}>
          <BsDiagram3 /> &nbsp; Web &amp; Backend Frameworks
        </h3>
        <Row style={{ justifyContent: "flex-start" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ReactIcon} alt="React" />
            <div className="tech-icons-text">React.js</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFlask fontSize={"24px"} />
            <div className="tech-icons-text">Python Flask</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot fontSize={"24px"} />
            <div className="tech-icons-text">Spring Boot</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiHtml5 fontSize={"24px"} />
            <div className="tech-icons-text">HTML5 / CSS3</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">RESTful APIs</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">Microservices</div>
          </Col>
        </Row>
      </div>

      {/* Group 3: Machine Learning, Generative AI & NLP */}
      <div className="mb-4">
        <h3 style={{ color: "#c770f0", fontSize: "1.35rem", fontWeight: "bold", textAlign: "left", marginBottom: "15px" }}>
          <BsRobot /> &nbsp; Artificial Intelligence &amp; LLMs
        </h3>
        <Row style={{ justifyContent: "flex-start" }}>
          <Col xs={4} md={2} className="tech-icons">
            <BsRobot fontSize={"24px"} />
            <div className="tech-icons-text">Generative AI / RAG</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow fontSize={"24px"} />
            <div className="tech-icons-text">TensorFlow</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch fontSize={"24px"} />
            <div className="tech-icons-text">PyTorch</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiScikitlearn fontSize={"24px"} />
            <div className="tech-icons-text">Scikit-Learn / SVM</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOpencv fontSize={"24px"} />
            <div className="tech-icons-text">OpenCV Computer Vision</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">Prompt Engineering</div>
          </Col>
        </Row>
      </div>

      {/* Group 4: Databases & Cloud Infrastructure */}
      <div className="mb-4">
        <h3 style={{ color: "#c770f0", fontSize: "1.35rem", fontWeight: "bold", textAlign: "left", marginBottom: "15px" }}>
          <BsDatabaseCheck /> &nbsp; Databases &amp; Cloud Infrastructure
        </h3>
        <Row style={{ justifyContent: "flex-start" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Mongo} alt="Mongo" />
            <div className="tech-icons-text">MongoDB</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql fontSize={"24px"} />
            <div className="tech-icons-text">MySQL</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase fontSize={"24px"} />
            <div className="tech-icons-text">Firebase (Firestore/Realtime)</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws fontSize={"24px"} />
            <div className="tech-icons-text">AWS (EC2, S3, Lambda)</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Docker} alt="Docker" />
            <div className="tech-icons-text">Docker</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes fontSize={"24px"} />
            <div className="tech-icons-text">Kubernetes</div>
          </Col>
        </Row>
      </div>

      {/* Group 5: Core Computer Science & SE Practices */}
      <div>
        <h3 style={{ color: "#c770f0", fontSize: "1.35rem", fontWeight: "bold", textAlign: "left", marginBottom: "15px" }}>
          <BsCpu /> &nbsp; Computer Science Core &amp; DevOps
        </h3>
        <Row style={{ justifyContent: "flex-start" }}>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">Data Structures &amp; Algo</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">OOP &amp; System Design</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">DBMS &amp; SQL Query Tuning</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">SDLC &amp; Agile Methodologies</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">CI/CD Pipelines &amp; DevOps</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tech-icons-text">QA &amp; Automated Testing</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Techstack;