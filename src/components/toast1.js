import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './toast1.css';

const Toast1 = (props) => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  // Function to handle closing the toast
  const handleCloseToast = () => {
    setIsVisible(false);
  };

  // If the toast is not visible, return null to render nothing
  if (!isVisible) {
    return null;
  }

  return (
    <div className="toast1-container">
      <img alt={props.logoAlt} src="/Logo.png" className="toast1-logo" />
      <div className="toast1-header">
        <div className="toast1-content">
          <h2 className="thq-heading-2">
            {props.bannerTitle ?? (
              <Fragment>
                <span className="toast1-text2">Banner Heading</span>
              </Fragment>
            )}
          </h2>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="toast1-text3">Button</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <button
        type="button"
        aria-label="Close"
        className="toast1-close-button"
        onClick={handleCloseToast} // Close the toast on click
      >
        <svg viewBox="0 0 804.5714285714286 1024" className="toast1-icon1">
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
      </button>
    </div>
  );
};

Toast1.defaultProps = {
  bannerTitle: undefined,
  logoAlt: 'image',
  button: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
};

Toast1.propTypes = {
  bannerTitle: PropTypes.element,
  logoAlt: PropTypes.string,
  button: PropTypes.element,
  logoSrc: PropTypes.string,
};

export default Toast1;
