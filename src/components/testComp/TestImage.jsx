import React from "react";

import { Image, Row, Col } from "react-bootstrap";

import IMG1 from "../assets/images/m1.jpeg";
import IMG2 from "../assets/images/m2.jpeg";

import styles from "./testImage.module.css";

const TestImage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-direction-column">
      <Row>
        <Col className={styles.img1} sm={12}>
          <Image src={IMG1} alt="mayur tade" />
        </Col>
        {/* <Col>
          <Image src={IMG2} alt="mayur tade" />
        </Col> */}
      </Row>
    </div>
  );
};

export default TestImage;
