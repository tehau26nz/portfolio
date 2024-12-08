import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { animated, useSpring } from "react-spring";
import styles from "../components/timeline.module.css";
import experiences from "../experiences";

const Timeline = () => {
  return (
    <>
      <h1 className={styles.mainTitle}>My work experiences</h1>
      <Container>
        <Row>
          <Col>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <TimelineEvent key={index} experience={exp} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const TimelineEvent = ({ experience, index }) => {
  // State to store screen width and determine if it's large
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Update isLargeScreen state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation for large screens (horizontal)
  const slideIn = useSpring({
    opacity: 1,
    transform: "translateY(0)", // Horizontal slide
    from: { opacity: 0, transform: "translateY(100%)" },
    delay: index * 400,
  });

  // Animation for small screens (vertical)
  const jumpIn = useSpring({
    opacity: 1,
    transform: "translateX(0)", // Vertical slide
    from: { opacity: 0, transform: "translateX(-100%)" },
    delay: index * 400,
  });

  return (
    <animated.div
      style={isLargeScreen ? slideIn : jumpIn} // Use ternary operator based on screen size
      className={styles.timelineEvent}
    >
      <Card>
        <Card.Body>
          <h5>{experience.role}</h5>
          <p>{experience.organisation}</p>
          <small>{experience.years}</small>
          <p>{experience.description}</p>
        </Card.Body>
      </Card>
    </animated.div>
  );
};

export default Timeline;
