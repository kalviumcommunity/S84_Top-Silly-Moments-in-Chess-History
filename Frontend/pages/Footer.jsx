import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__socials">
        <a href="https://github.com/AvinashGuleria0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/avinash-guleria-a18553324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/notavinashguleria?igsh=MW9rNnc4MTg3ODJ4eg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaXTwitter  />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=avinash.s84@kalvium.community" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Top Silly Moments in Chess History. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
