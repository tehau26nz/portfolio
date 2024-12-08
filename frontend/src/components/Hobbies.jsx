import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "../components/hobbies.module.css";

const Hobbies = () => {
  return (
    <>
      <h1 className={styles.mainTitle}>My hobbies</h1>
      <Container className={styles.hobbiesContainer}>
        <p className={styles.hobbiesTitleContainer}>
          I love to cook and bake, learn new languages and technologies, take
          photographs and edit videos, and visit new places.
          <br /> I'm always looking for new experiences and challenges, and I
          love to share my hobbies with others.
          <br />
        </p>
        <div className={styles.bodyContainer}>
          <h2>I enjoy</h2>
          <ul>
            <li>Cooking and baking </li>
            <li>Learning new languages and technologies </li>
            <li>Photography and video editing</li> <li>Visiting new places</li>
          </ul>
        </div>
        <div className={styles.projectsContainer}>
          <h2>Dev lab project</h2>
          <a
            href="https://eshop-cveu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/thumbnails/tours-thumbnail.jpg"
              alt="e-shop"
              roundedCircle
            ></Image>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Hobbies;
