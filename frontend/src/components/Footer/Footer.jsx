import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

  return (
    <div className="footer-container">
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" className="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              a, dolorem beatae eligendi error sequi natus itaque voluptatem
              quos in?
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 987-654-321</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-copy-right">
          Copyright 2024 &copy; Tomato.com - All Rights Reserved.
        </div>
      </footer>
      <button onClick={scrollToTop} id="scrollBtn" title="Scroll to top">
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
