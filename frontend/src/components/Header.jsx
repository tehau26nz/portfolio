import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBookOpen, FaBriefcase, FaMugHot } from "react-icons/fa";
import { Link } from "react-router";
import styles from "../components/header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className={styles.headerContainer}>
          <Link to="/">
            <img src="/logo192.png" alt="logo" rounded></img>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/education" className={styles.navbutton}>
                <FaBookOpen />
                Education
              </Link>
              <Link to="/experience" className={styles.navbutton}>
                <FaBriefcase />
                Experience
              </Link>
              <Link to="/hobbies" className={styles.navbutton}>
                <FaMugHot />
                Hobbies
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
