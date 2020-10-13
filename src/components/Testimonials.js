import React, { useState } from "react";
import CommonCard from "./common/card";
import Slider from "./common/slider";

import { cardContent } from "../utils/commonvar";
import { Row, Col, Container } from "react-bootstrap";

function Testmon(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="testimonial__section">
        <div className="top_heading pt-5 pb-5">
          <h3>We seek to help people like you.</h3>
          <p>See how we're making a difference.</p>
        </div>

        <div className="">
          <Slider settings={settings}>
            <div className="d-flex justify-content-center align-items-center flex-md-column bg__carousel">
              <p>
                I didn’t know that our genetic make up can be incompatible with
                so many drugs out there. It would be so ironic for people to
                take medicine, and in a few weeks find out they are not getting
                better because the medicine doesn’t work for them! Now that we
                know how to test for it, it doesn’t make sense to keep doing
                trial and error on ourselves. It would be like not knowing our
                blood type, and just getting any random type blood transfused
                into our system!
              </p>
              <h5>Hana Krismawati, M.Sc</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-md-column bg__carousel">
              <p>
                I didn’t know that our genetic make up can be incompatible with
                so many drugs out there. It would be so ironic for people to
                take medicine, and in a few weeks find out they are not getting
                better because the medicine doesn’t work for them! Now that we
                know how to test for it, it doesn’t make sense to keep doing
                trial and error on ourselves. It would be like not knowing our
                blood type, and just getting any random type blood transfused
                into our system!
              </p>
              <h5>Hana Krismawati, M.Sc</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-md-column bg__carousel">
              <p>
                I didn’t know that our genetic make up can be incompatible with
                so many drugs out there. It would be so ironic for people to
                take medicine, and in a few weeks find out they are not getting
                better because the medicine doesn’t work for them! Now that we
                know how to test for it, it doesn’t make sense to keep doing
                trial and error on ourselves. It would be like not knowing our
                blood type, and just getting any random type blood transfused
                into our system!
              </p>
              <h5>Hana Krismawati, M.Sc</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-md-column bg__carousel">
              <p>
                I didn’t know that our genetic make up can be incompatible with
                so many drugs out there. It would be so ironic for people to
                take medicine, and in a few weeks find out they are not getting
                better because the medicine doesn’t work for them! Now that we
                know how to test for it, it doesn’t make sense to keep doing
                trial and error on ourselves. It would be like not knowing our
                blood type, and just getting any random type blood transfused
                into our system!
              </p>
              <h5>Hana Krismawati, M.Sc</h5>
            </div>
          </Slider>
        </div>
      </div>
     
    </div>
  );
}

export default Testmon;
