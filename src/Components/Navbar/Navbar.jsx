import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="nav-glare-effect"></div>
      <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-main">Kafeel</span>
            <span className="logo-accent shimmer-effect">Glass</span>
            <span className="logo-main">Works</span>
            <div className="logo-reflect"></div>
          </Link>

          <div className="nav-menu-container">
            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMenu}>
                  <span className="link-text">Home</span>
                  <span className="link-glow"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMenu}>
                  <span className="link-text">About</span>
                  <span className="link-glow"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link" onClick={closeMenu}>
                  <span className="link-text">Products</span>
                  <span className="link-glow"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                  <span className="link-text">Gallery</span>
                  <span className="link-glow"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>
                  <span className="link-text">Contact</span>
                  <span className="link-glow"></span>
                </Link>
              </li>
            </ul>

            <div className="menu-toggle" onClick={toggleMenu}>
              {isOpen ? (
                <FiX className="close-icon" />
              ) : (
                <FiMenu className="menu-icon" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
