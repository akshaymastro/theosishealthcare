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
  Table,
} from "react-bootstrap";

function CommonTable(props) {
  return (
    <>
      {/* <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 ">{props.subtitle}</Card.Subtitle>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card> */}
      <Table responsive>
        <thead>
          <tr>
            <th>T</th>
            <th>Key</th>
            <th>Summary</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <td>
                <img src={item.img} alt="img" />
              </td>
              <td>{item.td1}</td>
              <td>{item.td2}</td>
              <td><img src={item.img2} alt="img" /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CommonTable;
