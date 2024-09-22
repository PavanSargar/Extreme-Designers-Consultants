import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";

import images, { clientImages, newImages } from "./porfolioImages";
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
        <Carousel style={{ height: "80vh", width: "100%" }} touch>
          {clientImages.map((img, i) => (
            <Carousel.Item key={i}>
              <Image
                className={``}
                style={{
                  height: "80vh",
                  width: "auto",
                }}
                src={img}
                alt={`Portfolio item ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className={styles["slider-container"]}>
        <Carousel style={{ height: "80vh", width: "100%" }} touch>
          {images.map((img, i) => (
            <Carousel.Item key={i}>
              <Image
                className={``}
                style={{
                  height: "80vh",
                  width: "auto",
                }}
                src={img.imgURL}
                alt={`Portfolio item ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className={styles["slider-container"]}>
        <Carousel style={{ height: "80vh", width: "100%" }} touch>
          {newImages.map((img, i) => (
            <Carousel.Item key={i}>
              <Image
                className={``}
                style={{
                  height: "80vh",
                  width: "auto",
                }}
                src={img}
                alt={`Portfolio item ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* <Container className={styles["slider-container"]}>
        {images.map((img, i) => (
          <LazyLoadImage
            key={i + Date.now()}
            src={img.imgURL}
            placeholderSrc={FALLLBACKIMG}
            alt="Mayur Tade"
          />
        ))} */}
    </Container>
  );
}

export default Portfolio;
