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
import CommonCard from "./common/card";
import CommonTable from "./common/table";

import { cardContent, tableContent, tableData } from "../utils/commonvar";

function Dashboard() {
  return (
    <>
      <Container className="dashboard">
        <div className="d-flex justify-content-between mt-4 ">
          <h5>Default Dashboard</h5>
          <div>
            <ul className="dash__link">
              <li>
                <i class="far fa-star"></i>
              </li>
              <li>
                <i class="fas fa-ellipsis-h"></i>
              </li>
            </ul>
          </div>
        </div>
        <Row>
          <Col md={6}>
            {cardContent.map((item) => (
              <>
                <Col>
                  <CommonCard title={item.title} subtitle={item.subtitle}>
                    {item.type === "list" ? (
                      <>
                        <div className="bgGrey">
                          <div className="d-flex justify-content-between">
                            <span className="">Bonsai (GB)</span>
                            <ul className="ico__links">
                              <li>
                                <img src="/ico_reports.png" />
                              </li>
                              <li>
                                <img src="/ico_filters.png" />
                              </li>
                            </ul>
                          </div>
                          <div className="f10">
                            <span className="">Lead</span>
                            <span className="pl-4">MastroLinks</span>
                          </div>
                        </div>
                        <div className="spacer10"></div>
                        <div className="bgGrey">
                          <div className="d-flex justify-content-between">
                            <span className="">Surveytool (GB)</span>
                            <ul className="ico__links">
                              <li>
                                <img src="/ico_reports.png" />
                              </li>
                              <li>
                                <img src="/ico_filters.png" />
                              </li>
                            </ul>
                          </div>
                          <div className="f10">
                            <span className="">Lead</span>
                            <span className="pl-4">MastroLinks</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p>
                        {item.description}
                        <br />
                        {item.para}
                      </p>
                    )}
                  </CommonCard>
                </Col>
              </>
            ))}
          </Col>

          <Col md={6}>
            {tableContent.map((item) => (
              <CommonCard title={item.title} subtitle={item.subtitle}>
                {item.type === "table" ? (
                  <CommonTable data={tableData} />
                ) : (
                  <>
                    <div className="d-flex justify-content-between">
                      <h5>Your Company JIRA</h5>
                      <ul className="dash__link">
                        <li>
                          <i class="fas fa-wifi"></i>
                        </li>
                        <li>
                          <i class="fas fa-wifi"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <div className="">
                        <h6 className="text-date">September 15</h6>
                      </div>
                      <Row>
                        <Col sm={2}>
                          <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5b8d55e696cb052b5f659f5a/74ed7164-5267-4d16-b962-c3d9aef1fefa/48?s=48" />
                        </Col>
                        <Col sm={10}>
                          <p className="mastro__para">
                            <a href="">Mastro Links</a> changed the status to To
                            Do on{" "}
                            <a href="">
                              SUR-7 - Admin panel for content management
                            </a>
                          </p>
                          <ul className="compny__edit">
                            <li>1 Week ago</li>
                            <li>Comment</li>
                            <li>Vote</li>
                            <li>Watch</li>
                          </ul>
                          <div className="border-top pt-1 pb-2">
                            <p className="mastro__para">
                              <a href="">Mastro Links</a> started the proces{" "}
                              <a href="">
                                SUR-7 - Admin panel for content management
                              </a>
                            </p>
                            <ul className="compny__edit">
                              <li>1 Week ago</li>
                              <li>Comment</li>
                              <li>Vote</li>
                              <li>Watch</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                )}
              </CommonCard>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
