import React from 'react'
import Nav from '../components/nav/Nav'

import Footer from "../components/Footer/Footer"

const NotFound = () => {
    return (
        <div>
            <header className="nav-space" >
                <Nav />
            </header>
            <div className="main_content">
                <div style={{paddingTop : '60px', textAlign : 'center',height:'200px'}}><h2>Whoops! 404 page not found</h2></div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;