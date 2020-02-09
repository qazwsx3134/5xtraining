import React from 'react'
import Nav from '../components/nav/Nav'
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer"

const Space = () => {
    return (
        <div>
            <header className="nav-space" >
                <Nav page={'space'}/>
            </header>
            <div className="main_content">
                <Banner bannerPage={"空間租借"} bannerTitle={"五倍紅寶石 台北出礦坑"} bannerText={"300M/100M 高速網路，場地租借優質選擇"} />
            </div>
            <Footer />
        </div>
    )
}

export default Space;