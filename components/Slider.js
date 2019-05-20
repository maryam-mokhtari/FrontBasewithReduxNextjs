import React, { Component } from "react";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToScroll: 1

      slidesToShow: 3,
      dots:true,
      centerMode: true,
    };
    return (
        <Slider {...settings}>
          <div><div>سلام۱</div></div>
          <div><div>سلام۲</div></div>
          <div><div>سلام۳</div></div>
          <div><div>سلام۴</div></div>
          <div><div>سلام۵</div></div>
          <div><div>سلام۶</div></div>
          <div><div>سلام۷</div></div>
        </Slider>
    );
  }
}
