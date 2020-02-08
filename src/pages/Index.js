import React from 'react';
import Nav from '../components/nav/Nav'
import SlideShow from "../components/SlideShow1/SlideShow";
import Feature from "../components/featureList/Feature";
import FeatureSection from "../components/featureList/FeatureSection";
import Lecture from "../components/lectureList/Lecture";
import LectureSection from "../components/lectureList/LectureSection";
import AvatarSlideShow from "../components/SlideShow2/SlideShow2";

import Pic1 from '../components/featureList/feature-list-img1-0d20ab19.png'
import Pic2 from '../components/featureList/feature-list-img2-26e4ca80.png'
import Pic3 from '../components/featureList/feature-list-img3-d0a4089e.png'
import Pic4 from '../components/featureList/feature-list-img4-13321bf0.png'
import lec1 from "../components/lectureList/lec1.jpg";
import lec2 from "../components/lectureList/lec2.jpg";
import lec3 from "../components/lectureList/lec3.jpg";

const Index=()=> {


    return (
    <div>
      <header className="nav-space" >
        <Nav />
      </header>
      <div className="main_content">
        <div className="overwrite-index">
          {/* Carousel */}
          <SlideShow />
          
          {/* feature */}
        <FeatureSection>
          <Feature url={`/talks`} img={Pic1} title1={"網頁設計"} titel2={"前後端課程教學"} text={"帶你掌握程式技能轉職工程師，程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程!"}/>
          <Feature url={`/showcases`} img={Pic2} title1={"頂尖技術"} titel2={"網頁製作、專案開發"} text={"網站開發到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。"}/>
          <Feature url={`/training`} img={Pic3} title1={"資訊軟體開發"} titel2={"技術顧問"} text={"協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！!"}/>
          <Feature url={`/posts/category/activity`} img={Pic4} title1={"前後端工程師"} titel2={"社群經營"} text={"Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。!"}/>
        </FeatureSection> 

        {/*recent lecture  */}
        <LectureSection>
                  <Lecture img={lec1} newOpen={true} apply={true} text={"工作上用得到的函數式程式設計：從觀念到實務 - 假日班"} teacher={"蘇泰安 (Taian Su)"} month={"2"} class={"假日班"} />
                  <Lecture img={lec2} newOpen={false} apply={true} text={"客製化進階 RWD 手機版網頁設計班 - 假日班"} teacher={"李建杭 (Amos Lee)"} month={"3"} class={"假日班"} />
                  <Lecture img={lec3} newOpen={false} apply={true} text={"Vue.js 與 Vuex 前端開發實戰課程 - 假日班"} teacher={"許國政 (Kuro Hsu)"} month={"3"} class={"假日班"} />
        </LectureSection>
          {/* avatar carousel */}

        
              <AvatarSlideShow/>
            

          </div>
      </div>
    </div>
    );
  }


export default Index;

