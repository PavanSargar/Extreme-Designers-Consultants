import React from "react";

import { Col, Row, Image } from "react-bootstrap";
import Header from "../components/Navbar/Header";

import styles from "./About.module.css";

import M2 from "../assets/aboutImages/m2.jpeg";
import OFFICEIMG from "../assets/aboutImages/office.jpeg";
import OFFICEVIDEO from "../assets/aboutImages/office-tour.mp4"

const About = () => {
  return (
    <>
      <Header variant="dark" />
      <div className={styles.container}>
        <h2>Who is Mayur Tade?</h2>

        <Row className={styles.content}>
          <Col className="d-flex align-items-center justify-content-center">
            <Image className={styles.image} src={M2} alt="Mayur Tade" />
          </Col>
          <Col className={styles["description"]}>
            <p>
              I'm Mayur Tade <b>(Chairman Indian Society of Structural Engineers Association (ISSE), Baramati)</b>, founder of<b> Extreme Designers &
              Consultants</b>. Our vision is to provide best quality of structures
              at affordable prices with long-term durability.
            </p>
            <div className={styles.education}>
              <h5>Education</h5>
              <ul>
                <li> Diploma in Civil Engineering</li>
                <li>
                  Bachelors in Civil Engineering (Pune University) Master of
                </li>
                <li> Engineering (Pune University)</li>
              </ul>
            </div>
            <div className={styles.experience}>
              <h5>Experience</h5>
              <ul>
                <li>Ajwani Infrastructure Pvt Ltd. (2yrs) (Road Projects)</li>
                <li>
                  Panchayat Samiti Baramati. (4yrs) (Government Technical
                  Department)
                </li>
                <li>
                  RCC Consultant. (9yrs) (Private Sectors of Bunglows, Buildings
                  and Industrial)
                </li>
              </ul>
            </div>
            <div className={styles.achievements}>
              <h5>Achievements</h5>
              <ul>
                <li>First Prize in Concrete Cube Testing Competition</li>
                <li>First Prize in Paper Presentation Competition</li>
                <li>First Prize in Model Making Competition</li>
                <li>
                  MOU with Kamalnayan Bajaj Institute of Engineering (VPCOE,
                  Baramati.)
                </li>
                <li>Member of ISSE (Indian Society of Structural Engineers)</li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className={styles.office}>
          <h2>Office Tour</h2>
          <Row className={styles["office-media"]}>
            <Col className={styles["img-col"]} sm={12}>
              <Image src={OFFICEIMG} alt="Mayur Tade Office" />
            </Col>
            <Col className={styles["video-col"]}>
                <video src={OFFICEVIDEO} autoPlay loop muted />  
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
