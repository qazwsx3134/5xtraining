/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-empty */
import React, { useState, useEffect } from 'react';
import Banner4 from './banner_5xruby-3d66d288.jpg';
import Banner1 from './banner_astro-a839be5c.jpg';
import Banner3 from './banner_astro-a839be5c1.jpg';
import Banner2 from './banner_imcodingit-53a9a811.jpg';

const SlideShow = () => {
  const [active, setActive] = useState(0);
  const [sliderXposition, setSliderXposition] = useState(0);
  const [stopCarousel, setStopCarousel] = useState(false);


  useEffect(() => {
    const autoplay = setInterval(() => {
      if (stopCarousel === true) {

      } else if (sliderXposition >= -200) {
        setSliderXposition(sliderXposition - 100);
        setActive(active + 1);
      } else {
        setSliderXposition(0);
        setActive(0);
      }
    }, 5000);

    return () => {
      clearInterval(autoplay);
    };
  });

  const onMouseOverChange = () => {
    setStopCarousel(true);
  };
  const onMouseOutChange = () => {
    setStopCarousel(false);
  };

  const changeSlide = (e) => {
    // eslint-disable-next-line radix
    setActive(parseInt(e.target.id));
    setSliderXposition(e.target.id * -100);
  };

  return (


    <div className="slideshow">

      <div className="dotbox">
        <span id="0" className={`${active === 0 ? 'dot_active' : 'dot'} `} onClick={changeSlide} />
        <span id="1" className={`${active === 1 ? 'dot_active' : 'dot'} `} onClick={changeSlide} />
        <span id="2" className={`${active === 2 ? 'dot_active' : 'dot'} `} onClick={changeSlide} />
        <span id="3" className={`${active === 3 ? 'dot_active' : 'dot'} `} onClick={changeSlide} />
      </div>
      <div className="slider" onMouseOver={onMouseOverChange} onMouseOut={onMouseOutChange}>
        <div key="1" className="slide" style={{ transform: `translateX(${sliderXposition}%)` }}>
          <img className="responsiveimg" src={Banner1} alt="b1" />
        </div>

        <div key="2" className="slide" style={{ transform: `translateX(${sliderXposition}%)` }}>
          <img className="responsiveimg" src={Banner2} alt="b2" />
        </div>

        <div key="3" className="slide" style={{ transform: `translateX(${sliderXposition}%)` }}>
          <img className="responsiveimg" src={Banner3} alt="b3" />
        </div>

        <div key="4" className="slide" style={{ transform: `translateX(${sliderXposition}%)` }}>
          <img className="responsiveimg" src={Banner4} alt="b4" />
        </div>


      </div>


    </div>
  );
};


export default SlideShow;
