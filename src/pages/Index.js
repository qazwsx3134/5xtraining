import React from 'react';
import Nav from '../components/nav/Nav'
import SlideShow1 from "../components/SlideShow1/SlideShow";


const Index=()=> {


    return (
    <div>
      <header className="nav-space" >
        <Nav />
      </header>
      <div className="main_content">
        <div className="overwrite-index">
          {/* Carousel */}
          <SlideShow1 />
          
          
          </div>
      </div>
    </div>
    );
  }


export default Index;

