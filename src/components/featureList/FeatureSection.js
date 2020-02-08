import React from 'react';


const FeatureSection = (props)=>{
    
    return (
        <div className="feature-section light-grey-bg pb-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
                <h3 className="text-center mb-5 mt-5 pb-4">
                  <span className="underline">關於五倍紅寶石 About 5xRuby </span>

                </h3>
                <div className="feature-list d-flex text-center flex-wrap">
                {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};


export default FeatureSection;