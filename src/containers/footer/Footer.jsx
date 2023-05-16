import React from 'react';
import './footer.css';
import gpt3Logo from '../../logo.svg';

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="footer-btn">Request Early Access</div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Omar Owaity, <br /> All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Omar Owaity</p>
          <p>+961-71526880</p>
          <p>omarowaity@gmail.com</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;