import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Quest() {
  return (
    <>
      <Container className="gin__section">
        <Row>
          <Col sm={6}>
            <div className="">
              <h1>Get in touch!</h1>
              <p>
                Contact us for research partnerships, commercial partnerships,
                media coverage and career opportunities. If you have further
                questions or would like to introduce our services to a team of
                doctors or providers, let us know and we'll be in touch with the
                next steps.
              </p>
              <div className="">
                <label>Address</label>
                <span>79 Ayer Rajah Crescent, #05-03, Singapore 139955</span>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="" placeholder="Your Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="" placeholder="Enter Phone Number" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Quest;
