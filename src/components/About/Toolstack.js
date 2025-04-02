import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
  SiPhpstorm,
  SiAndroidstudio,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitLab">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MacOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHPStorm">
        <SiPhpstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Android Studio">
        <SiAndroidstudio />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
