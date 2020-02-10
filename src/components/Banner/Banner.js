/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import img from './posts-main-photo.jpg';

const Banner = (props) => (
  props.posts
    ? (
      <div className="top-banner red-bg pt-3 pb-3 contacts" style={{ background: `url(${img})  no-repeat center center`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-right" style={{ height: '28px' }}>
              {/* FB 分享與讚 */}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-white">
              <ol className="breadcrumb" itemScope="itemScope" itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope="itemScope" itemType="https://schema.org/ListItem">
                  <a itemScope="itemScope" itemType="https://schema.org/Thing" itemProp="item" href="/"><span itemProp="name">首頁</span></a>
                </li>
                <li itemProp="itemListElement" itemScope="itemScope" itemType="https://schema.org/ListItem">
                  <h5><a itemScope="itemScope" itemType="https://schema.org/Thing" itemProp="item" href="/press"><span itemProp="name">{props.bannerPage}</span></a></h5>
                </li>
              </ol>
              <h1 className="title mt-4 mb-3">{props.bannerTitle}</h1>
              <h3 className="text-center mb-2">{props.bannerText}</h3>
            </div>
          </div>
        </div>
      </div>
    )
    : (
      <div className="top-banner red-bg pt-3 pb-3 contacts">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-right" style={{ height: '28px' }}>
              {/* FB 分享與讚 */}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-white">
              <ol className="breadcrumb" itemScope="itemScope" itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope="itemScope" itemType="https://schema.org/ListItem">
                  <a itemScope="itemScope" itemType="https://schema.org/Thing" itemProp="item" href="/"><span itemProp="name">首頁</span></a>
                </li>
                <li itemProp="itemListElement" itemScope="itemScope" itemType="https://schema.org/ListItem">
                  <h5><a itemScope="itemScope" itemType="https://schema.org/Thing" itemProp="item" href="/press"><span itemProp="name">{props.bannerPage}</span></a></h5>
                </li>
              </ol>
              <h1 className="title mt-4 mb-3">{props.bannerTitle}</h1>
              <h3 className="text-center mb-2">{props.bannerText}</h3>
            </div>
          </div>
        </div>
      </div>
    )
);

export default Banner;
