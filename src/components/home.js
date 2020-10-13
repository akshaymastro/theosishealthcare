import React from "react";
import Slider from "../components/common/slider";
import { Row, Col, Button } from "react-bootstrap";
import Carousel from "./Carousel";
import Medicine from "./Medicine";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import GetInTouch from "./GetInTouch";
import Blog from "./Blog";
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
          <img src="/services2.png" alt="" />
        </div>
        <div>
          <img src="/services3.png" alt="" />
        </div>
        <div>
          <img src="/xyz.png" alt="" />
        </div>
        <div>
          <img src="/pharma.png" alt="" />
        </div>
        <div>
          <img src="/services.png" alt="" />
        </div>
      </Slider>
      <Row className="mt-4">
        <Col md={6} sm={12}>
          <div className="img__home">
            <img src="/homepage.svg" alt="" />
          </div>
        </Col>
        <Col
          md={6}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="home__section">
            <h3>Is your medication right for you?</h3>
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
            <div className="mt-5 ">
              <Button className="btn-check" variant="info">
                Check My Symptoms Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Carousel />
      <Medicine />
      <Testimonials />
      <Faq />
      <GetInTouch />
      <Blog />
    </>
  );
}

export default home;
