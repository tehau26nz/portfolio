import React from "react";
import { Card } from "react-bootstrap";
import styles from "../components/education.module.css";
import education from "../education";

const Education = () => {
  return (
    <>
      {education.map((edu, index) => (
        <Card
          className={`my-3 p-3 rounded ${styles.cardFade}`}
          key={index}
          style={{
            animationDelay: `${index * 0.3}s`, //Delay each card by 0.3s
          }}
        >
          <Card.Body>
            <Card.Title as="div">
              <strong>{edu.qualification}</strong>
            </Card.Title>
            <Card.Text as="h2">{edu.institution}</Card.Text>
            <Card.Text as="h3">{edu.years}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Education;
