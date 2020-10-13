import React, { useState } from "react";
import CommonCard from "./common/card";

import { blogCardContent } from "../utils/commonvar";
import { Row, Col, Container } from "react-bootstrap";

function Testmon() {
  return (
    <>
      <Container>
        <div className="blog__section">
          <h1 className="text-center">Blog</h1>
          <Row>
            {blogCardContent.map((item) => (
              <Col md={4}>
                <CommonCard
                  title={item.title}
                  blog={item.blog}
                  img={item.img}
                  subtitle={item.subtitle}
                  description={item.content}
                />
              </Col>
            ))}
            
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Testmon;
