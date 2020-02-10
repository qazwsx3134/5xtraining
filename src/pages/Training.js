import React from 'react';
import Nav from '../components/nav/Nav';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const Training = () => (
  <div>
    <header className="nav-space">
      <Nav page="training" />
    </header>
    <div className="main_content">
      <Banner bannerPage="企業內訓" bannerTitle="企業內訓 現有人力=即戰力" bannerText="精心設計培訓計畫，讓您將現有人力轉換為 Ruby/Rails 即戰力" />
    </div>
    <Footer />
  </div>
);

export default Training;
