import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../screens/notfound.module.css";

const NotFound = () => {
  return (
    <>
      <Container className={styles.notFoundContainer}>
        <Card className="mt-5">
          <h1>Oops {":("}</h1>
          <Card.Img
            src="/assets/thumbnails/cat-error.jpeg"
            className={styles.cardImage}
          />
          <div className={styles.notFoundBody}>
            <h2>Unfortunately ...</h2>
            <p>This page couldn't be found</p>
            <Link className="btn btn-dark m-4" to="/">
              Return home
            </Link>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default NotFound;
