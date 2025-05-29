import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Kafeel Glass Works</h3>
          <p className="footer-about">
            30+ years of experience in providing high-quality glass beads and
            coral stones at competitive prices.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="products" smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Our Products</h3>
          <ul className="footer-links">
            <li>Glass Beads</li>
            <li>Coral Stones</li>
            <li>Specialty Beads</li>
            <li>Custom Designs</li>
            <li>Bulk Orders</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Purdilnagar Hathras, Uttar Pradesh, India</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <a href="tel:+919876543210">+91 9045497383</a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:siddmr009@gmail.com">siddmr009@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Kafeel Glass Works. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
