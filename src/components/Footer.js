import React, { useState } from "react";
import CommonCard from "./common/card";

import { cardContent } from "../utils/commonvar";
import { Row, Col, Container, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row className="pt-5">
            <Col sm={4}>
              <div className="address">
                <p>
                  79 Ayer Rajah Crescent, #05-03, Singapore 139955 Call us: +65
                  8780 1440
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="about__us">
                <Row>
                  <Col sm={6}>
                    <h5>NALAGENETICS</h5>
                    <ul>
                      <li>About Us</li>
                      <li>Contact</li>
                      <li>Blog</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <h5>NALAGENETICS</h5>
                    <ul>
                      <li>About Us</li>
                      <li>Contact</li>
                      <li>Blog</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={4}>
              <div className="subscribe">
                <h5>NALAGENETICS</h5>
                <p>
                  Subscribe to get the latest updates on drug information,
                  regulations, and tips to get better faster.
                </p>

                <Button variant="info">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
