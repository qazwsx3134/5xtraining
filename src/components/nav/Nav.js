import React ,{useState}from 'react';
import logo from './logo-c473f739.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem,faCompass } from '@fortawesome/free-regular-svg-icons'

const Nav = (props)=>{
    const [buttonClick, setButtonClick] = useState(false)
    
    const onButtonClick =()=>{

        setButtonClick(!buttonClick)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-light overwrite-nav">
            <div className="container-fluid nav-border pl-3 pr-3">
            {/* Logo */}
                <a href="/" className="navbar-brand logo-link">
                    <img src={logo} alt="網頁設計前後端課程 | 五倍紅寶石"/>
                </a>
            {/* button */}
            <button className="navbar-toggler" type="button" onClick={onButtonClick}>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </button>
            {/* link list */}
                <div className={`navbar-collapse flex-row-reverse collapse ${buttonClick ? 'show' : ''}`} >
                <ul className="navbar-nav">
                    <li className="nav-item text-center">
                        <a className="nav-link is-event" href="https://iamcoding.tw/" target="_blank" rel="noopener noreferrer">
                            <span style={{fontSize : "16px", marginRight : "2px"}}><FontAwesomeIcon icon={faGem} /></span>
                            線上課程
                        </a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link is-event" href="https://astro.5xruby.tw/" target="_blank" rel="noopener noreferrer">
                            <span style={{fontSize : "16px", marginRight : "2px"}}><FontAwesomeIcon icon={faCompass} /></span>
                            ASTRO Camp
                            <span className="tag">報名優惠中</span>
                        </a>
                        
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="/talks">短期課程</a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="https://dev.5xruby.tw">專案開發</a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="/training">企業代訓</a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link " href="/space">空間租借</a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link " href="/posts">最新消息</a>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
        
    );
};


export default Nav;