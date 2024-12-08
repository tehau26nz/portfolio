import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../components/about.module.css";

const About = () => {
  const translations = ["Welcome", "Nau mai", "Bienvenue", "Iaorana"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [translations.length]);

  return (
    <>
      <h1 className={`${styles.title} ${styles.fade}`}>
        {translations[currentIndex]}
      </h1>
      <Container className={styles.introCard}>
        <Row className="justify-content-md-center" gap={3}>
          <Col md="auto" className="mb-3">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFpZjvOtH4YGw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677642634851?e=1738800000&v=beta&t=Wl_fkuTowIJT2WBWihRPmInKneoYKB1UGrNkaSXDVx4"
              alt="profile"
              className={styles.avatar}
            ></img>
          </Col>
          <Col lg="auto">
            <h2 className="text-center">I'm Tehaunui</h2>
            <Card className={styles.introDescription}>
              <p className="text-center p-3 m-1">
                Currently a web developer at the Ministry of Education. I enjoy
                being involved in front-end, back-end development, and build
                intuitive web apps, websites and dev related projects.
              </p>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <h3>Skills</h3>
        </div>
        <Card>
          <Row className="justify-content-center" xs sm md lg={12}>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/html-5.png" alt="HTML-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/css-3.png" alt="CSS-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/js.png" alt="JavaScript-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img
                src="/assets/logos/typescript.png"
                alt="Typescript-logo"
              ></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/react.png" alt="React-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/node-js.png" alt="NodeJS-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/php.png" alt="PHP-logo"></img>
            </Col>
          </Row>
        </Card>
        <div className="text-center mt-5">
          <h3>Tools</h3>
        </div>
        <Card>
          <Row className="justify-content-evenly" xs sm md lg={12}>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/terminal.png" alt="Terminal-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/docker.png" alt="Docker-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/git.png" alt="Git-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/jira.png" alt="Jira-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img src="/assets/logos/figma.png" alt="Figma-logo"></img>
            </Col>
            <Col xs md lg className="d-flex justify-content-center m-2">
              <img
                src="/assets/logos/vscode.png"
                alt="Visual-Studio-Code-logo"
              ></img>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default About;
