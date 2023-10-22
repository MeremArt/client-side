import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../../data";

import "./Slider.css";
const AutoPlaySlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 3000,
    draggable: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="general_slides">
      <Slider {...settings}>
        <div className="individual_slides">
          <img src={images.Improvement} alt="features" />
        </div>
        <div className="individual_slides">
          <img src={images.Innovation} alt="features" />
        </div>
        <div>
          <img src={images.Price} alt="features" />
        </div>
        <div className="individual_slides">
          <img src={images.Integrity} alt="features" />
        </div>
        <div className="individual_slides">
          <img src={images.communities} alt="features" />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySlide;
