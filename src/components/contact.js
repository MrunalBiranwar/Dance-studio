import React from "react";
import PropTypes from "prop-types";
import "./contact.css";

const Contact = (props) => {
  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                fill="#3490dc"
              ></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text4 thq-heading-3">Email</h3>
                <p className="contact-text5 thq-body-large">{props.content3}</p>
              </div>
              <span className="contact-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                fill="#3490dc"
              ></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text6 thq-heading-3">Phone</h3>
                <p className="contact-text7 thq-body-large">{props.content4}</p>
              </div>
              <span className="contact-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path
                d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                fill="#3490dc"
              ></path>
            </svg>
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text8 thq-heading-3">Office</h3>
                <p className="contact-text9 thq-body-large">{props.content5}</p>
              </div>
              <span className="contact-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  content5: "We look forward to dancing with you!",
  content1:
    "Feel free to reach out to us for any inquiries or to book a class.",
  address1: "123 Elegant Retro Street, City, Country",
  phone1: "+1 (123) 456-7890",
  email1: "info@dancestudio.com",
  content3: "Follow us on social media for updates and special offers.",
  content4: "For any urgent matters, please give us a call.",
  heading1: "Contact Us",
  content2: "We are open Monday to Friday from 9am to 6pm.",
};

Contact.propTypes = {
  content5: PropTypes.string,
  content1: PropTypes.string,
  address1: PropTypes.string,
  phone1: PropTypes.string,
  email1: PropTypes.string,
  content3: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
};

export default Contact;
