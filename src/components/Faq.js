import React, { useState } from "react";
import CommonCard from "./common/card";
import Slider from "./common/slider";

import { cardContent } from "../utils/commonvar";
import { Accordion, Card, Button } from "react-bootstrap";

function Quest() {
  return (
    <>
      <div className="faq__section">
        <h3 className="text-center">FAQs</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  We provide clinical decision support for clinicians based on
                  your patient’s unique genetic profile. Just like any other
                  routine blood tests and medical imaging, genetic profile
                  provides additional information about the patient that may be
                  crucial in the success of the patient’s treatment.{" "}
                </p>
                <p>
                  {" "}
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                What does Nalagenetics sell?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Our end-to-end support service covers the provision of genetic
                  tests all the way to the interpretation of the patient’s test
                  results and generation of actionable drug-gene reports. These
                  services are delivered through HIPAA compliant, private and
                  secure web and mobile platforms where patients can talk to
                  their physicians, as well as ask our genetic counselor and
                  pharmacist regarding their test result.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
}

export default Quest;
