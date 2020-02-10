/* eslint-disable react/prop-types */
import React from 'react';


const Showcase = ({
  url, img, alt, title, text,
}) => (
  <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 case">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="lecture-wrap">
        <img className="responsiveimg" src={img} alt={alt} />
        <h4 className="rl-padding mt-3 mb-3">{title}</h4>
        <div className="rl-padding">
          <p className="descri mb-5 text-left">{text}</p>
        </div>
      </div>
    </a>
  </div>
);


export default Showcase;
