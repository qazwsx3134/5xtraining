import React from 'react';
import Nav from '../components/nav/Nav';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const Talks = () => (
  <div>
    <header className="nav-space">
      <Nav page="training" />
    </header>
    <div className="main_content">
      <Banner bannerPage="網頁設計課程" bannerTitle="前端網頁設計及後端課程" bannerText="由入門到進階，網頁課程推薦新手入門，紮實打好網頁基礎，擁有實作經驗！" />
    </div>
    <Footer />
  </div>
);

export default Talks;
