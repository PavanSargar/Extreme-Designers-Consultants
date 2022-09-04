import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./Footer.module.css";

function Footer(props) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer id="contact" data-aos={props.animation} className={styles.footer}>
      <Container>
        <Row>
          <Col sm={6} className={styles.title}>
            <h4>Exterme Designers & Consultants</h4>
            <p>We convert your dreams into reality!</p>
          </Col>
          <Col className={styles.contact}>
            <h4>Get in Touch</h4>
            <label htmlFor="Address">
              {" "}
              <u> Office Address:</u>
            </label>
            <p>
              Dwarkaprasth, Ahilya Devi Society, Plot No. 07, Shiv Nagar,
              Jalochi, Baramati - 413102, dist. Pune.
            </p>
            <a href="mailto:extremedesignersandconsultant@gmail.com">
              <Button variant="outline-light" size="sm">
                Send us a Mail
              </Button>
            </a>
            <a href="tel:+919766905794">
              <Button variant="outline-light" size="sm">
                Give us a Call
              </Button>
            </a>
          </Col>
        </Row>
        <hr />
        <Row className={styles.copyright}>
          <Col><p>Copyright © {currentYear} Mayur Tade | <a href="https://pawansargar.herokuapp.com">Contact Web Developer?</a></p></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
