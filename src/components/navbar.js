import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  // Navigate to the login page
  const goToLogin = () => {
    navigate('/sign-in3'); // Adjust the route as needed
  };

  // Navigate to the register page
  const goToRegister = () => {
    navigate('/sign-up10'); // Adjust the route as needed
  };

  return (
    <header className="navbar-container">
      <div className="navbar-navbar-interactive">
        <img alt={props.logoAlt} src="/Logo.png" className="navbar-image1" />

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span className="thq-body-small thq-link">{props.link1}</span>
            <span className="thq-body-small thq-link">{props.link2}</span>
            <span className="thq-body-small thq-link">{props.link3}</span>
            <span className="thq-body-small thq-link">{props.link4}</span>
            <span className="thq-body-small thq-link">{props.link5}</span>
          </nav>
          <div className="navbar-buttons1">
            <button onClick={goToLogin} className="navbar-action11 thq-button-animated thq-button-filled">
              <span className="thq-body-small">{props.text}</span>
            </button>
            <button onClick={goToRegister} className="navbar-action21 thq-button-animated thq-button-outline">
              <span className="thq-body-small">{props.text1}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button (Burger Menu) */}
        <div className="navbar-burger-menu" onClick={toggleMobileMenu}>
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img alt={props.logoAlt} src={props.logoSrc} className="navbar-logo" />
                <div className="navbar-close-menu" onClick={toggleMobileMenu}>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links2">
                <span className="thq-body-small thq-link">{props.link1}</span>
                <span className="thq-body-small thq-link">{props.link2}</span>
                <span className="thq-body-small thq-link">{props.link3}</span>
                <span className="thq-body-small thq-link">{props.link4}</span>
                <span className="thq-body-small thq-link">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar-buttons2">
              <button onClick={goToLogin} className="thq-button-filled">Login</button>
              <button onClick={goToRegister} className="thq-button-outline">Register</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Navbar.defaultProps = {
  text: 'Login',
  text1: 'Register',
  link1: 'Home',
  link2: 'About',
  link3: 'Classes',
  link4: 'Gallery',
  link5: 'Contact',
  logoSrc: '/public/Logo.png',
  logoAlt: 'logo',
};

Navbar.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
};

export default Navbar;
