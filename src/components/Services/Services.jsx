import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./Services.module.css";

function Services(props) {
  return (
    <Container id="services" data-aos={props.animation} className={styles.container}>
      <h2>How Can We Help You?</h2>
      <hr />

      <Row className={styles["services-row"]}>
        <Col className={styles["service-card"]} sm={6} xs={12} md={4}>
          <Image height="75" width="75" src="/assets/planning.webp" />
          <h3>Planning</h3>
          <p>
            Plans of various Bunglows, Apartments, Row Houses, Commercial
            Buildings, Institutional Buildings, Government Buildings.
          </p>
        </Col>
        <Col className={styles["service-card"]} sm={6} xs={12} md={4}>
          <Image height="75" width="75" src="/assets/design.webp" />
          <h3>Designing</h3>
          <p>RCC Designs, 3D Making, Interior Designs, Landscape Designs.</p>
        </Col>
        <Col className={styles["service-card"]} sm={6} xs={12} md={4}>
          <Image
            height="75"
            width="75"
            src="/assets/sanctioning.webp"
          />
          <h3>Sanctioning</h3>
          <p>
            Sanction of residential bunglows, residential + commercial
            apartments, Layout sanctioning work, Plot Amalgamation Work.
          </p>
        </Col>
        <Col className={styles["service-card"]} sm={6} xs={12} md={4}>
          <Image height="75" width="75" src="/assets/chart.webp" />
          <h3>Survey</h3>
          <p>
            Land Survey, Building stakeout, Demarcation Work, Contouring work
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
