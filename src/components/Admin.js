import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BlogContent from "./BlogContent";
function Admin(props) {
  return (
    <Row>
      <Col sm={2} className="pr-0">
        <div className="sidenav">
          <ul>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Dashboard</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col sm={10} className="pl-0">
        {props.children}
      </Col>
    </Row>
  );
}

export default Admin;
