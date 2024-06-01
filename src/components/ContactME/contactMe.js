/**
 * File name: contactMe.js
 * Student's Name: Shivam Ujjainwal
 * StudentID: 301304093
 * Date: 2024-05-31
 */

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      message: ""
    });
    window.location.href = "/";
  };

  return (
    <div>
      <Container fluid className="contact-section">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", padding: "80px" }}>
          <h1 className="contact-heading">
            <strong className="purple">Get in Touch</strong>
          </h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} className="contact-info purple" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> 4379331954
              <br />
              <strong>Email:</strong> shivam.ujjainwal044@gmail.com
            </p>
          </Col>
          <Col md={6}>
            <h3 className="purple">Send Me a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label className="purple">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label className="purple">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formContactNumber">
                <Form.Label className="purple">Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="purple">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label className="purple">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button style={{ marginTop: "20px" }} variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
