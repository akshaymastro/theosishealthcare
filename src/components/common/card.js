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
  console.log(props, "propspspsp");
  return (
    <>
      <Card className={props.className}>
        <Card.Body>
          {props.blog === true && <Card.Img src={props.img} />}
          <Card.Title>
            {props.blog === true ? props.title : <img src={props.img} alt="" />}
          </Card.Title>
          <Card.Subtitle className="mb-2 ">{props.subtitle}</Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CommonCard;
