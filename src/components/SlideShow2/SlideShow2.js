import React, {useState,useEffect} from 'react';
import person1 from "./person1.jpg";
import person2 from "./person2.jpg";
import person3 from "./person3.jpg";
import person4 from "./person4.jpg";
import person5 from "./person5.jpg";
import person6 from "./person6.jpg";

const SlideShow = (props)=>{
    const [active, setActive] = useState(0)
    const [sliderXposition,setSliderXposition] = useState(0)
    const [stopCarousel , setStopCarousel] = useState(false)

    
    useEffect(() => {
        let autoplay = setInterval(() => {
            if (stopCarousel === true) {
                
            }else if (sliderXposition >= -400) {
                setSliderXposition(sliderXposition - 100)
                setActive(active + 1)
            } else {
                setSliderXposition(0)
                setActive(0)  
            }
            
        }, 5000);
        
        return () => {
            clearInterval(autoplay)
        };
    }, )

    const onMouseOverChange = ()=>{
        setStopCarousel(true) 
    }
    const onMouseOutChange = ()=>{
        setStopCarousel(false) 
    }
    
    const changeSlide = (e)=>{
        setActive(parseInt(e.target.id)) 
        setSliderXposition(e.target.id * -100)
    }
    
    return (
        
        
        <div>
        <div className="avatar-carousel light-grey-bg pb-2">
          <h3 className="section-title text-center mb-4 pt-5 pb-4">
            <span>網頁課程推薦</span>
          </h3>
          <div className="carousel slide">
            <div className="container mt-3">
        
        <div className="slider" onMouseOver={onMouseOverChange} onMouseOut={onMouseOutChange}>
            <div key={"1"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person1}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。
                            <br></br>
                            <span className="d-block text-red large mt-3">Victor Lam</span>
                            <span className="d-block text-grey">連續創業家，自由工作者</span>
                        </p>
                        
                    </div>
                </div>
                
                
            </div>
            
            <div key={"2"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person2}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.
                            <br></br>
                            <span className="d-block text-red large mt-3">Jason Hs</span>
                            <span className="d-block text-grey">founder of The Big Questions & TEDxTaipei</span>
                        </p>
                        
                    </div>
                </div>
            </div>

            <div key={"3"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
               <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person3}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">還在尋找專業的 Ruby/Rails 師資嗎？別懷疑了，台灣最頂尖的 Rubyist 盡在「五倍紅寶石」！
                            <br></br>
                            <span className="d-block text-red large mt-3">Felix Lin</span>
                            <span className="d-block text-grey">dappei.com 「搭配」網站創辦人</span>
                        </p>
                        
                    </div>
                </div>
            </div>

            <div key={"4"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person4}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                            <br></br>
                            <span className="d-block text-red large mt-3">Hana Chang</span>
                            <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span>
                        </p>
                        
                    </div>
                </div>
            </div>

            <div key={"5"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person5}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">選擇程式語言很重要，但選擇優秀的導師更重要！能跟擁有多年 Ruby/Rails 實戰經驗、活躍於社群的頂尖 Rubyist 學習，將一窺程式開發殿堂之藝術！我堅信：專業事讓專業的來，而專業的「五倍紅寶石」是寶藏，就等大家來挖掘。
                            <br></br>
                            <span className="d-block text-red large mt-3">John Sie</span>
                            <span className="d-block text-grey">Accuvally Inc.共同創辦人暨營運長</span>
                        </p>
                        
                    </div>
                </div>
            </div>

            <div key={"6"} className="slide" style={{transform: `translateX(${sliderXposition}%)`}}> 
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <img className="d-block avatarimg" src={person6}  alt={"b4"}/>
                    </div>
                    
                    <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <p className="d-block statement">「五倍紅寶石」的導師們都是業界經驗豐富的實戰高手，提供的課程及咨詢絕對能讓你大幅省去自行摸索的時間。
                            <br></br>
                            <span className="d-block text-red large mt-3">Ben Li</span>
                            <span className="d-block text-grey">連續創業家，自由工作者</span>
                        </p>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
            <div className="dotbox">
                <span id="0" className={`${active === 0 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
                <span id="1" className={`${active === 1 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
                <span id="2" className={`${active === 2 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
                <span id="3" className={`${active === 3 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
                <span id="4" className={`${active === 4 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
                <span id="5" className={`${active === 5 ? 'dot_active':'dot'} `} onClick={changeSlide}></span>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}


export default SlideShow;