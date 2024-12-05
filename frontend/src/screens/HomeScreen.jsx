import React from "react";
import { Col, Row } from "react-bootstrap";
import Experience from "../components/Experience";
import experiences from "../experiences";

const HomeScreen = () => {
  return (
    <>
      <div className="skills-list">
        <h1>I've worked with:</h1>
        <Row>
          {experiences.map((experience) => (
            <Col key={experience._id} sm={12} md={6} lg={4} xl={3}>
              <Experience experience={experience} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
