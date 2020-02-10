/* eslint-disable react/prop-types */
import React from 'react';


const Feature = ({
  url, img, alt, title1, title2, text,
}) => (
  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
    <a href={url}>
      <img src={img} alt={alt} />
      <h3 className="pt-3">
        {title1 }
        <br />
        {' '}
        {title2}
      </h3>
      <p className="pt-3 pb-3 text-center">{text}</p>
    </a>
  </div>
);


export default Feature;
