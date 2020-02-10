/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';


const LectureSection = (props) => (
  <div className="recent-lecture ">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
          <h3 className="text-center mb-5 mt-5 pb-4">
            <span className="underline">熱門網頁設計課程推薦 </span>
          </h3>
          <div className="lecture-list d-flex flex-wrap pb-3">
            {props.children}
          </div>
          <div className="col-12 text-center">
            <a className="btn btn-lg btn-red mt-4" href="/talks">看更多網頁課程</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default LectureSection;
