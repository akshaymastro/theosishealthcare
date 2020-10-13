import React, { useState } from "react";
import CommonCard from "./common/card";

import { cardContent } from "../utils/commonvar";
import { Row, Col, Container } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-5">
          End-to-end precision medicine support
        </h1>
        <Row>
          {cardContent.map((item) => (
            <Col md={4}>
              <CommonCard
                className="card__class"
                titleCheck={true}
                img={item.img}
                subtitle={item.subtitle}
                description={item.description}
              />
            </Col>
          ))}
          ;
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
