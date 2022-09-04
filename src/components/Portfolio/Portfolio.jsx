import React from "react";

import images from "./porfolioImages";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FALLLBACKIMG from "../../assets/homeImages/Loading....png";

// import Slider from "react-slick";

import styles from "./Portfolio.module.css";

function Portfolio(props) {
  return (
    <Container
      data-aos={props.animation}
      fluid
      className={`${styles.container} ${styles.portfolio}`}
    >
      <h2>Portfolio</h2>
      <hr />
      <Container className={styles["slider-container"]}>
        {images.map((img, i) => (
          <LazyLoadImage
            key={i + Date.now()}
            src={img.imgURL}
            placeholderSrc={FALLLBACKIMG}
            alt="Mayur Tade"
          />
        ))}
      </Container>
    </Container>
  );
}

export default Portfolio;
