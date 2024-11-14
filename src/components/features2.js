import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature1Title: 'Professional Instructors',
  feature3ImgAlt: 'State-of-the-Art Facilities Image',
  feature1ImgAlt: 'Professional Instructors Image',
  feature2ImgAlt: 'Variety of Dance Styles Image',
  feature3Title: 'State-of-the-Art Facilities',
  feature2Title: 'Variety of Dance Styles',
  feature3ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3Description:
    'Our studio is equipped with top-of-the-line sound systems, spacious dance floors, and comfortable waiting areas for students and parents.',
  feature2Description:
    "Choose from a wide range of dance styles including ballet, hip-hop, salsa, and more. Whether you're a beginner or advanced dancer, we have classes for every level.",
  feature1Description:
    'Our dance studio is staffed with experienced and talented instructors who are dedicated to helping you improve your skills and reach your dance goals.',
  feature1ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Features2.propTypes = {
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Features2
