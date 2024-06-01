/**
 * File name: Projects.js
 * Student's Name: Shivam Ujjainwal
 * StudentID: 301304093
 * Date: 2024-05-31
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/portfolio.png";
import dg from "../../Assets/dg.png"
import emailService from "../../Assets/emailservice.webp";


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dg}
              isBlog={false}
              title="Dolce and Gourmando"
              description="Developing an AI-driven, cloud-based inventory and product management system to enhance operational efficiency, using React.js, Node.js, and AWS."
              ghLink="https://github.com/shivam044/bundlesa"
              demoLink="https://dolce-fe-dev.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailService}
              isBlog={false}
              title="Email Service"
              description="Built an email service using NodeMailer and Angular for sending and managing emails efficiently, featuring real-time notifications and an intuitive user interface."
              ghLink="https://github.com/shivam044/EmailService-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a portfolio website using the MERN stack to showcase my work, skills, and projects. Features include a dynamic project gallery, contact form, and a blog section."
              ghLink="https://github.com/shivam044/portfolio"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
