import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../components/experience.module.css";

const Experience = ({ experience }) => {
  return (
    <Stack gap={2} className={styles.Card}>
      <Card>
        <Card header>
          {experience.role} | {experience.years}
        </Card>
        <Card body>
          <Card subtitle className="mb-2 text-muted">
            {experience.description}
          </Card>
          <p>
            Organisation<br></br>
          </p>
          <Card.Link href={`${experience.url}`} target="_blank">
            {experience.organisation}
          </Card.Link>
        </Card>
      </Card>
      {/* <Card className="my-3 p-3 rounded">
        <Link to={`/experience/${experience._id}`}>
          <Card.Img src={experience.image} variant="top"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/experience/${experience._id}`}>
            <Card.Title as="div">
              <strong>{experience.role}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">{experience.years}</Card.Text>
        </Card.Body>
      </Card> */}
    </Stack>
  );
};

export default Experience;
