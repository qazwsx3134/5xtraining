/* eslint-disable react/prop-types */
import React from 'react';


const Lecture = ({
  url, img, alt, newOpen, apply, teacher, month, classday, text,
}) => (
  <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
    <a href={url}>
      <div className="lecture-wrap">
        <div className="lecture-cover">
          <img className="responsiveimg" src={img} alt={alt} />
        </div>
        <div className="lecture-content rl-padding py-2">
          {newOpen && <span className="badge badge-new-course">新開課</span> }
&nbsp;
          {apply && <span className="badge badge-apply-course">開放報名中</span>}
          <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">{text}</h4>
          <small>
            講師：
            {teacher}
          </small>
          <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
            <small className="flex-grow">開課時間</small>
            <div className="lecture-time-item">
              <span className="badge badge-course-time mb-1">
                {month}
                {' '}
                月｜
                {classday}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);


export default Lecture;
