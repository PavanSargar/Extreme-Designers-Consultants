import React from "react";

import { Link } from "react-router-dom";
import { Col, Container, Image, Row, Button } from "react-bootstrap";

import styles from "./About.module.css";

import PORTRAIT from "../assets/images/Portrait.png";

function About(props) {
  return (
    <Container
      id="about"
      data-aos={props.animation}
      className={styles.container}
    >
      <h2>About</h2>
      <hr />

      <Row className={styles["about-row"]}>
        <Col sm={4} className={styles["about-img"]}>
          <Image
            className={styles.image}
            src={PORTRAIT}
            // src="https://res.cloudinary.com/dsbt1l9sw/image/upload/v1634921310/Mayur%20Tade%20Portfolio%20Images/mayur_tade_gqeniz.png"
          />
        </Col>
        <Col sm={8} className={styles["about-text"]}>
          <h3>Mayur Tade</h3>
          <p>
            I'm Mayur Tade (Structural Engineer), founder of Extreme Designers &
            Consultants. Our vision is to provide best quality of structures at
            affordable prices with long-term durability.
          </p>
          <Button variant="outline-dark">
            <Link className="text-decoration-none" to="/about">Learn More</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
