import React, { Component, useState } from "react";
import Slider from "react-slick";

const ImageSlider = (props) => {
  const [drag, setDrag] = useState(false);

  const settings = {
    dots: false,
    //   infinite: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToShow: 3,
    variableWidth: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  const onMouseMove = (e) => {
    if (e.button !== 0) return;
    setDrag(true);
  }

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    setDrag(false);
  }

  const onMouseUp = (e, index) => {
    if (e.button !== 0) return;

    if (!drag)
      props.sliderClicked(index);
  }

  return (
    <div className="slider-wrap">
      <Slider {...settings}>
        {props.images.map((img, index) => (
          <img
            key={index}
            src={`/our_gites/${props.folder}/${img}.webp`}
            onMouseDown={e => onMouseDown(e)}
            onMouseMove={e => onMouseMove(e)}
            onMouseUp={e => onMouseUp(e, index)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider
