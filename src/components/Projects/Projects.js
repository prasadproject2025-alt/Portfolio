import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// TODO: Replace these placeholder images with actual screenshots of your projects
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* NoteShare */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Placeholder image
              isBlog={false}
              title="NoteShare Collaboration Platform"
              description="A responsive full-stack web application designed for student collaboration and resource sharing. Built with JavaScript, React, Bootstrap, and SQL, it features authentication modules, session management, and robust REST API integration for seamless frontend-backend communication."
              ghLink="https://github.com/prasadproject2025-alt/NoteShare"
            />
          </Col>

          {/* AI Writing Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode} // Placeholder image
              isBlog={false}
              title="AutoPen: AI Writing Assistant"
              description="A real-time, AI-powered writing assistant providing dynamic grammar correction, tone consistency analysis, and content generation. Integrates transformer-based models like Hugging Face RoBERTa and BART, deployed with a React.js frontend and Node.js backend."
              ghLink="https://github.com/prasadproject2025-alt/AI-Powered-Creative-Writing-Assistant"
            />
          </Col>

          {/* Hand Biometrics */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide} // Placeholder image
              isBlog={false}
              title="Contactless Hand Biometrics"
              description="A secure biometric-based contactless payment system using hand image authentication. Leverages a pretrained MobileNet V2 CNN for feature extraction, an SVM classifier, and AES-based Fernet encryption. Packaged into an interactive Streamlit web application."
              ghLink="https://github.com/prasadproject2025-alt/CONTACTLESS-PAYMENT-USING-HAND-BIOMETRICS"
            />
          </Col>

          {/* Plant Disease */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf} // Matches plant theme perfectly!
              isBlog={false}
              title="Plant Leaf Disease Detection"
              description="An applied machine learning computer vision solution for the early identification of 8 classes of mango leaf diseases. Uses a hybrid deep learning architecture combining CNNs and EfficientNet-B0, deployed as a lightweight interactive prediction interface using Gradio."
              ghLink="https://github.com/prasadproject2025-alt/Plant-leaf-disease-prediction"
            />
          </Col>

          {/* Pill Dispense System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion} // Placeholder image
              isBlog={false}
              title="Smart Pill Dispense System"
              description="An automated and secure medication dispensing system integrating RFID technology and facial recognition. Built using computer vision techniques to ensure highly accurate patient verification and safe delivery workflows."
              ghLink="https://github.com/prasadproject2025-alt/pill-dispense-system-with-rfid-and-face-recognition"
            />
          </Col>

          {/* Inventory Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} // Placeholder image
              isBlog={false}
              title="Inventory Management System"
              description="A scalable full-stack application designed to track and manage inventory efficiently. Features modular UI architecture, secure database integration, and scalable REST API workflows for real-time inventory tracking and analytics."
              ghLink="https://github.com/prasadproject2025-alt/inventory-management-system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;