import React from "react";
import { Card, Row, Stack } from "react-bootstrap";
import styles from "../components/education.module.css";
import education from "../education";

const Education = () => {
  return (
    <>
      <h1 className={styles.mainTitle}>Where I studied</h1>
      <Row className="m-1">
        {education.map((edu, index) => (
          <Card
            className={`rounded ${styles.cardFade}`}
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <Stack direction="horizontal" className={styles.Card}>
              <div className={styles.titles}>
                <h1>{edu.qualification}</h1>
                <Card.Link
                  href={`${edu.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Text as="h2">{edu.institution}</Card.Text>
                </Card.Link>
                <Card.Text as="h3">{edu.years}</Card.Text>
                {edu.others ? (
                  <p className="mt-3">
                    Major : {edu.others.major} {" - "} Minor :{" "}
                    {edu.others.minor}
                  </p>
                ) : (
                  ""
                )}
                {edu.papers ? (
                  <p className="mt-3 font-monospace font">
                    Papers : {edu.papers}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <img
                src={edu.logo}
                className={styles.logo}
                rounded
                alt={`${edu.institution}-logo`}
              />
            </Stack>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Education;
