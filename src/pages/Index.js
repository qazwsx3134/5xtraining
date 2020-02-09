import React from 'react';
import Nav from '../components/nav/Nav'
import SlideShow from "../components/SlideShow1/SlideShow";
import Feature from "../components/featureList/Feature";
import FeatureSection from "../components/featureList/FeatureSection";
import Lecture from "../components/lectureList/Lecture";
import LectureSection from "../components/lectureList/LectureSection";
import AvatarSlideShow from "../components/SlideShow2/SlideShow2";
import Showcase from "../components/Showcases/Showcase";
import ShowcaseSection from "../components/Showcases/ShowcaseSection";
import KnowAboutUS from "../components/KnowAboutUs/KnowAboutUs"
import Footer from "../components/Footer/Footer"

import Pic1 from '../components/featureList/feature-list-img1-0d20ab19.png'
import Pic2 from '../components/featureList/feature-list-img2-26e4ca80.png'
import Pic3 from '../components/featureList/feature-list-img3-d0a4089e.png'
import Pic4 from '../components/featureList/feature-list-img4-13321bf0.png'
import lec1 from "../components/lectureList/lec1.jpg";
import lec2 from "../components/lectureList/lec2.jpg";
import lec3 from "../components/lectureList/lec3.jpg";
import case1 from "../components/Showcases/case1.png"
import case2 from "../components/Showcases/case2.png"
import case3 from "../components/Showcases/case3.jpg"

import data from "../staticData/data";

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
          <Feature url={`${data.Feature[0].url}`} img={Pic1} title1={`${data.Feature[0].title1}`} titel2={`${data.Feature[0].title2}`} text={`${data.Feature[0].text}`}/>
          <Feature url={`${data.Feature[1].url}`} img={Pic2} title1={`${data.Feature[1].title1}`} titel2={`${data.Feature[1].title2}`} text={`${data.Feature[1].text}`}/>
          <Feature url={`${data.Feature[2].url}`} img={Pic3} title1={`${data.Feature[2].title1}`} titel2={`${data.Feature[2].title2}`} text={`${data.Feature[2].text}`}/>
          <Feature url={`${data.Feature[3].url}`} img={Pic4} title1={`${data.Feature[3].title1}`} titel2={`${data.Feature[3].title2}`} text={`${data.Feature[3].text}`}/>
        </FeatureSection> 

        {/*recent lecture  */}
        <LectureSection>
                  <Lecture img={lec1} newOpen={data.Lecture[0].newOpen} apply={data.Lecture[0].apply} text={`${data.Lecture[0].text}`} teacher={`${data.Lecture[0].teacher}`} month={`${data.Lecture[0].month}`} class={`${data.Lecture[0].class}`} />
                  <Lecture img={lec2} newOpen={data.Lecture[1].newOpen} apply={data.Lecture[1].apply} text={`${data.Lecture[1].text}`} teacher={`${data.Lecture[1].teacher}`} month={`${data.Lecture[1].month}`} class={`${data.Lecture[1].class}`}/>
                  <Lecture img={lec3} newOpen={data.Lecture[2].newOpen} apply={data.Lecture[2].apply} text={`${data.Lecture[2].text}`} teacher={`${data.Lecture[2].teacher}`} month={`${data.Lecture[2].month}`} class={`${data.Lecture[2].class}`}/>
        </LectureSection>
          {/* avatar carousel */}

        
              <AvatarSlideShow/>
            
         {/* Showcase */}

         <ShowcaseSection>
            <Showcase img={case1} title={'SpaceNextDoor'} text={'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.'} />
            <Showcase img={case2} title={'Shopmatic Go app'} text={"Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes."}/>
            <Showcase img={case3} title={'跨境電子商務 Shopmatic'} text={"Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online."}/>
          </ShowcaseSection>
          {/* know about us */}
          <KnowAboutUS />

          </div>
      </div>
      <Footer />
    </div>
    );
  }


export default Index;

