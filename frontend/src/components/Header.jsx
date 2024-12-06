import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBookOpen, FaBriefcase, FaMugHot } from "react-icons/fa";
import styles from "../components/header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/education" className={styles.navbutton}>
                <FaBookOpen />
                Education
              </Nav.Link>
              <Nav.Link href="/experience" className={styles.navbutton}>
                <FaBriefcase />
                Experience
              </Nav.Link>
              <Nav.Link href="/hobbies" className={styles.navbutton}>
                <FaMugHot />
                Hobbies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
