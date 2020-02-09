import React ,{useState}from 'react';


const Showcase = (props)=>{



    return (
        <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 case">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="lecture-wrap">
                <img className="responsiveimg" src={props.img} alt={props.alt}/>
                <h4 className="rl-padding mt-3 mb-3">{props.title}</h4>
                <div className="rl-padding">
                    <p className="descri mb-5 text-left">{props.text}</p>
                </div>
            </div>
            </a>
        </div>
    );
};


export default Showcase;