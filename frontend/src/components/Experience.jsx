import React from "react";
import { Card, Stack } from "react-bootstrap";
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
    </Stack>
  );
};

export default Experience;
