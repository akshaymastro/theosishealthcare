import React from "react";
import Slider from "./common/slider";
import { Row, Col, Button, Container } from "react-bootstrap";

function home(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="carousel-bg d-flex justify-content-center align-items-center">
        <div className="">
          <h2>Everybody handles drugs differently</h2>
          <p>DNA impacts drug response more than you know</p>
        </div>
      </div>
      <Container>
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
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="home__section">
              <h3>
                Discoveries in pharmacogenetics are changing how doctors
                prescribe medicines today.
              </h3>
              <p>
                Each individual responds differently to the same drug because of
                their unique genetic makeup. You have genes that affect your eye
                color, your height, and other physical features and you also
                have genes that affect the speed of your metabolism.
              </p>
              <p>
                Adverse drug reactions can range in severity from a mild cough,
                to a headache and even to life-threatening rashes. LEARN MORE
                ABOUT THE SCIENCE
              </p>
              <div className="mt-5 ">
                <Button className="outline-btn" variant="outline-success">
                  LEARN MORE ABOUT THE SCIENCE
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="img__home">
              <img src="/img_homepage_science_behind.svg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default home;
