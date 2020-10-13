import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
  Card,Accordion
} from "react-bootstrap";

function CommonCard(props) {
  return (
    <>
      >
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {props.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{props.content}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default CommonCard;
