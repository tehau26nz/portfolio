import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Experience = ({ experience }) => {
  return (
    <Card className="my-3 p-3 rounded">
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
    </Card>
  );
};

export default Experience;
