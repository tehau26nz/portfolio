import React, { useEffect, useState } from "react";
import styles from "../components/about.module.css";

const About = () => {
  const translations = ["Welcome", "Nau mai", "Salut", "Iaorana"];
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
      <div className={styles.intro}>
        <h2>I'm Tehaunui</h2>
        <div>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/92765882?v=4"
            alt="profile"
          />
        </div>
        <p className={styles.intro}>
          Currently a web developer at the Ministry of Education
          <br />
          I enjoy being involved in front-end, back-end development, <br />
          and build intuitive web apps, websites and dev related projects.{" "}
          <br />
        </p>
      </div>
    </>
  );
};

export default About;
