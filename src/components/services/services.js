/**
 * File name: services.js
 * Student's Name: Shivam Ujjainwal
 * StudentID: 301304093
 * Date: 2024-05-31
 */

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import webDevImage from "../../Assets/DALL·E 2024-05-31 22.59.31 - A modern and sleek image representing web development services, showcasing coding on a computer screen with abstract technology elements.webp";
import mobileAppsImage from "../../Assets/DALL·E 2024-05-31 22.59.36 - A modern and sleek image representing mobile app development services, showcasing a smartphone with app icons and abstract technology elements.webp";
import programmingImage from "../../Assets/DALL·E 2024-05-31 22.59.39 - A modern and sleek image representing general programming services, showcasing code snippets, gears, and abstract technology elements.webp";

function Services() {
  return (
    <div>
          <Container fluid className="services-section" style={{ padding: "60px" }}>
        <Particle />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="services-heading">
            <strong className="purple">My  Services</strong>
          </h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px",  paddingTop: "50px",  paddingLeft: "50px"}}>
          <Col md={4} className="service-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={webDevImage} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Building responsive and modern web applications using the latest technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="service-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={mobileAppsImage} />
              <Card.Body>
                <Card.Title>Mobile Apps</Card.Title>
                <Card.Text>
                  Creating user-friendly mobile applications for both Android and iOS platforms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="service-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={programmingImage} />
              <Card.Body>
                <Card.Title>General Programming</Card.Title>
                <Card.Text>
                  Offering a range of programming services, including automation and scripting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
