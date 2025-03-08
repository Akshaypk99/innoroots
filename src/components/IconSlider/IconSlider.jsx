import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./IconSlider.scss";

const IconSlider = ({ iconList, direction = "right" }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,  // Adjust this based on your container size
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed:3000,
    cssEase: "linear",
    rtl: direction === "right",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, // Medium screens (Tablets)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Small screens (Mobile landscape)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Extra small screens (Mobile portrait)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className='icon-slider-container'>

      <div className="slider-container">
        <Slider {...settings}>
          {iconList.map((icon, index) => (
            <div key={index}>
              <div className='icon-box'>
                <img src={icon} className={`img ${direction}`} />
              </div>
            </div>
          ))}
        </Slider>

      </div>


    </div>
  );
};

export default IconSlider;
