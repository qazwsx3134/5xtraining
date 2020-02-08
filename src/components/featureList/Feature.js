import React from 'react';


const Feature = (props)=>{
    
    return (
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <a href={props.url}>
                <img src={props.img} alt={props.alt}/>
                <h3 className="pt-3">{props.title1 }<br></br> {props.title2}</h3>
                <p className="pt-3 pb-3 text-center">{props.text}</p>
            </a>
        </div>
    );
};


export default Feature;