import React from "react";

import images from "./porfolioImages";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FALLLBACKIMG from "../../assets/homeImages/Loading....png";

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Portfolio.module.css";

function Portfolio(props) {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container
      data-aos={props.animation}
      fluid
      className={`${styles.container} ${styles.portfolio}`}
    >
      <h2>Portfolio</h2>
      <hr />
      <Container className={styles["slider-container"]}>
        {/* <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className={styles["slider-images"]}>
              <img alt="mayur tade portfolio images" src={img.imgURL} />
            </div>
          ))}
        </Slider> */}
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
