import React from 'react';
import social from '../social.js';

const MainComponent = (props) => {
  return (
    <div className="columns-block">
      <div className="left-col-block blocks">
        <header className="header">
          <div className="content text-center">
            <h1>Hi, I'm Donald Pakkies!</h1>
            <p className="lead">Freelance Software Developer & Casual Gamer</p>
            <ul className="social-icon">
              <li><a href={social.twitter}><i className="fa fa-twitter"></i></a></li>
              <li><a href={social.linkedin}><i className="fa fa-linkedin"></i></a></li>
              <li><a href={social.github}><i className="fa fa-github"></i></a></li>
            </ul>
          </div>
          <div className="profile-img"></div>
        </header>
      </div>

      <div className="right-col-block blocks">
        {props.children}

        <footer className="footer">
          <div className="copyright-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="copytext">
                    &copy; { (new Date()).getFullYear() } Donald Pakkies. All rights reserved | <a href="https://github.com/donaldp/donaldpakkies.com">Source Code</a> | Design By: <a href="https://themehippo.com">ThemeHippo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
};

export default MainComponent;