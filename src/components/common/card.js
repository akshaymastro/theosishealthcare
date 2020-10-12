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
  Card,
} from "react-bootstrap";

function CommonCard(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 ">{props.subtitle}</Card.Subtitle>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CommonCard;
