import React from 'react';
import Nav from '../components/nav/Nav';
import Banner from '../components/Banner/Banner';
import Contactsec from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Contact = () => (
  <div>
    <header className="nav-space">
      <Nav />
    </header>
    <div className="main_content">
      <Banner bannerPage="聯絡我們" bannerTitle="有任何問題嗎？馬上聯絡我們！" bannerText={' '} />
      <Contactsec />
    </div>
    <Footer />
  </div>
);

export default Contact;
