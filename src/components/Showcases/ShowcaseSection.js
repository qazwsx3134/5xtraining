import React from 'react';


const ShowcaseSection = (props)=>{
    
    return (
        <div className="showcases pb-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
                <h3 className="text-center mb-5 mt-5 pb-4">
                  <span className="underline">熱門網頁設計課程推薦 </span>
                </h3>
                <div className="lecture-list d-flex flex-wrap pb-3">
                {props.children}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-1">
                  <a className="text-red" href="/talks">...更多案例</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};


export default ShowcaseSection;