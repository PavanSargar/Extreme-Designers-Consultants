import React from "react";
import Typewriter from "typewriter-effect";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Header from "../Navbar/Header";

import styles from "./Home.module.css";

import IMG1 from "../assets/images/m1.jpeg";

function Home(props) {
  return (
    <Container
      data-aos={props.animation}
      fluid
      className={`${styles.container} ${styles.home}`}
    >
      <Header variant="dark" />

      <Row className={styles["top-row"]}>
        <Col className={styles[("top-col", "title")]}>
          <h2>Extreme Designers & Consultants</h2>
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`We convert your dreams into reality!`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`Send us your DREAMS`)
                  .start();
              }}
            />
          </p>

          <Button size="md" variant="outline-light">
            <a href="#about">More Details</a>
          </Button>
        </Col>
        <Col className={styles["top-col"]}>
          <Image
            className={styles.image}
            // src="/assets/construction.svg"
            src={IMG1}
            // src="https://i0.wp.com/mayurtade.com/wp-content/uploads/2020/07/Mayur_Tade-removebg-preview.png?w=343"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
