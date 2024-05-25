import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 Konain Raza</p>
      </div>
      <div className="footer-right">
        <ul className="social-icons">
        
          <li className="icon github">
            <a
              href="https://github.com/Konain-Raza/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="icon-svg" />
              <span className="tooltip">GitHub</span>
            </a>
          </li>

          <li className="icon linkedin">
            <a
              href="https://www.linkedin.com/in/konain-raza-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon-svg" />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>
          <li className="icon gmail">
            <a
              href="mailto:konainraza105@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <FaEnvelope className="icon-svg" />
              <span className="tooltip">Gmail</span>
            </a>
          </li>
          <li className="icon facebook">
            <a
              href="https://www.facebook.com/share/qzZYjZDBRKyQBdyt/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="icon-svg" />
              <span className="tooltip">Facebook</span>
            </a>
          </li>
          <li className="icon instagram">
            <a
              href="https://www.instagram.com/konainraza_01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon-svg" />
              <span className="tooltip">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
