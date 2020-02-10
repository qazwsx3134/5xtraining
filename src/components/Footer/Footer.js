/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable vars-on-top */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import cakeresume from './cakeresume.png';
import media from './media.png';

const Footer = () => {
  const [toTop, settoTop] = useState(false);


  useEffect(() => {
    if (toTop === true) {
      const id = setInterval((() => { window.scroll(0, window.pageYOffset - 200); }), 15);
      setTimeout(() => {
        clearInterval(id);
        settoTop(false);
      }, 350);
    }
  }, [toTop]);


  const scrollToTop = () => {
    settoTop(true);
  };

  return (
    <div>
      <footer className="overwrite-footer light-grey-bg mt-5">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-3">
              <a href="/press" className="d-block mb-3 press-img">
                <img src={media} title="媒體報導" alt="媒體報導" />
              </a>
              <a href="https://www.cakeresume.com/jobs" className="d-block cakeresume press-img" target="_blank" rel="noopener noreferrer">
                <img src={cakeresume} title="CakeResume 找工作" alt="CakeResume 找工作" style={{ maxWidth: '180px', marginBottom: '10px', paddingRight: '6px' }} />
                <span className="text-muted">找工作</span>
              </a>
            </div>

            <div className="col-12 col-md-9">
              <div className="row">

                <div className="col-12 mt-3 mt-md-0">
                  <div className="footer-nav">
                    <h5><a href="/about">關於五倍紅寶石</a></h5>
                    <h5><a href="/press">媒體報導</a></h5>
                    <h5><a href="/members">團隊成員</a></h5>
                    <h5><a href="/contacts">聯絡詢價</a></h5>
                    <h5><a href="/faq">常見問題</a></h5>
                    <h5><a href="/jobs">工作機會</a></h5>
                    <h5><a target="_blank" rel="noopener noreferrer" href="https://github.com/5xRuby">開源專案</a></h5>
                    <h5><a href="/privacy-policy">隱私權條款</a></h5>
                    <h5><a href="/terms-of-service">服務條款</a></h5>
                  </div>
                </div>

                <div className="col-12 mt-4">

                  <div className="row">

                    <div className="col-12 col-md-4 col-xl-3">
                      <div className="contact-info">
                        <strong className="large text-danger">02-2331-5247</strong>
                        <br />
                        <small>Mon - Fri / 09:30 - 22:00</small>
                        <br />
                        <a href="https://www.facebook.com/5xruby" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="media-icon.fa-facebook-f media-icon" icon={faFacebookF} /></a>
                        <a href="https://twitter.com/5xruby" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="media-icon" icon={faTwitter} /></a>
                        <a href="https://github.com/5xruby" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="media-icon" icon={faGithub} /></a>
                      </div>
                    </div>

                    <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                      <div className="mail-address">
                        <p>有任何問題？</p>
                        <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                        <br />
                        <p>
                          地址：
                          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/lz5v93">10046 台北市中正區衡陽路 7 號 5 樓</a>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-info text-center">
                <p>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                <p>台北市短期補習班立案 第 7594 號</p>
              </div>
            </div>

          </div>
        </div>

        <div className="scrollup to-top text-center" id="scrTop" onClick={scrollToTop}>
          <FontAwesomeIcon className="fa" icon={faAngleUp} />
        </div>

      </footer>
    </div>
  );
};

export default Footer;
