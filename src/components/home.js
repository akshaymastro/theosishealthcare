import React from "react";
import Slider from "../components/common/slider";
import { Row, Col } from "react-bootstrap";

function home(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider settings={settings}>
        <div>
          <img src="/services2.png" />
        </div>
        <div>
          <img src="/services3.png" />
        </div>
        <div>
          <img src="/xyz.png" />
        </div>
        <div>
          <img src="/pharma.png" />
        </div>
        <div>
          <img src="/services.png" />
        </div>
      </Slider>
      <Row>
        <Col md={6} sm={12}>
          <div className="img__home">
            <img src="/homepage.svg" />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="home__section">
            <h3>Medicine</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default home;
