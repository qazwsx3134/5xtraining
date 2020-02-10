import React, { useState } from 'react';
import Modal from 'react-modal';
import map from './maps.jpg';


const customStyles = {
  content: {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '570px',
    height: '613px',
  },
};


const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [tele, setTele] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmailAddr(e.target.value);
  };
  const onTeleChange = (e) => {
    setTele(e.target.value);
  };
  const onSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="mt-5 mb-5 pb-5 overwrite-contacts">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            {/* 左半邊 */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
              <h3 className="mb-1">五倍紅寶石股份有限公司</h3>
              10046 台北市中正區衡陽路 7 號 5 樓
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex pl-0 mb-3">

              <div className="cml-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                Tel：02-2331-5247
                <br />
                Mobile：0928-617-687
                <br />
                E-mail：
                <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-03 pr-0">
                Fax：02-2331-8717
                <br />
                統編：24536806
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
              <img src={map} alt="map" style={{ width: '100%', height: '450px', border: '0px' }} />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            {/* 右半邊 */}
            <div className="mb-3">
              任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
            </div>
            <form className="new_contact" id="new_contact" onSubmit={openModal}>
              <input type="hidden" name="" />
              <div className="form-group">
                <input className="form-control input-lg" placeholder="名字" onChange={onNameChange} type="text" id="contact_name" required="true" />
              </div>
              <div className="form-group">
                <input className="form-control input-lg" placeholder="信箱" onChange={onEmailChange} type="email" id="contact_email" required="true" />
              </div>
              <div className="form-group">
                <input className="form-control input-lg" placeholder="電話" onChange={onTeleChange} type="text" id="contact_phone" required="" />
              </div>
              <div className="form-group">
                <select className="form-control input-lg" id="sel1" onChange={onSubjectChange} required="true">
                  <option value="">請選擇主題</option>
                  <option value="專案開發">專案開發</option>
                  <option value="技術諮詢">技術諮詢</option>
                  <option value="企業內訓">企業內訓</option>
                  <option value="課程詢問">課程詢問</option>
                  <option value="其它">其它</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="5" className="form-control" placeholder="留下你的訊息" onChange={onMessageChange} id="contact_message" required="" />
              </div>
              <input type="submit" name="commit" value="送出" className="btn btn-red btn-block" />
            </form>

            {/* Modal */}
            <Modal
              overlayClassName="Overlay"
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal"
            >
              <h2 className="modal__title">詳細資料</h2>
              <h3 className="modal__body">
                主題 :
                {' '}
                {subject}
              </h3>
              <h4 className="modal__body">
                姓名 :
                {' '}
                {name}
              </h4>
              <h4 className="modal__body">
                信箱 :
                {' '}
                {emailAddr}
              </h4>
              <h4 className="modal__body">
                電話 :
                {' '}
                {tele}
              </h4>
              <h4 className="modal__body">
                訊息 :
                {' '}
                {message}
              </h4>

            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
