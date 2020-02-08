import React ,{useState}from 'react';


const Lecture = (props)=>{



    return (
        <div className="talks-partial col-12 col-sm-12 col-md-6 col-lg-4 pic mb-4 mb-sm-5">
            <a href={props.url}>
            <div className="lecture-wrap">
                <div className="lecture-cover">
                    <img className="responsiveimg" src={props.img} alt={props.alt}/>
                </div>
                <div className="lecture-content rl-padding py-2">
                    {props.newOpen && <span className="badge badge-new-course">新開課</span> }&nbsp; 
                    {props.apply && <span className="badge badge-apply-course">開放報名中</span>}
                    <h4 className="mt-2 mb-2 mb-sm-4 font-weight-bold">{props.text}</h4>
                    <small>講師：{props.teacher}</small>
                    <div className="lecture-time mt-2 pt-sm-3 pt-2 pt-sm-3 d-flex">
                        <small className="flex-grow">開課時間</small>
                        <div className="lecture-time-item">
                            <span className="badge badge-course-time mb-1">{props.month} 月｜{props.className}</span>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>
    );
};


export default Lecture;