import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsEye } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div 
        style={{ cursor: "pointer" }} 
        onClick={() => props.onInspect && props.onInspect(props.project || props)}
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title 
          style={{ cursor: "pointer" }}
          onClick={() => props.onInspect && props.onInspect(props.project || props)}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {props.onInspect && (
            <Button
              variant="primary"
              onClick={() => props.onInspect(props.project || props)}
              style={{ 
                marginLeft: "10px", 
                backgroundColor: "#623686", 
                borderColor: "#623686" 
              }}
            >
              <BsEye /> &nbsp;
              {"Inspect"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
