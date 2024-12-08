import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "../components/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Stack direction="vertical" className={styles.contactLinks}>
          <p className="text-center">Let's connect</p>
          <Col className="d-flex justify-content-center">
            <a
              href="https://github.com/tehau26nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/logos/github.png" alt="GitHub-link"></img>
            </a>

            <a
              href="https://www.linkedin.com/in/tehaunuiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/logos/linkedin.png" alt="LinkedIn-link"></img>
            </a>
          </Col>
        </Stack>
        <Row>
          <Col className={styles.footerCopyright}>
            <p>Tehaunui &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
