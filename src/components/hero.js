import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image2Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image8Alt: 'Retro Swing Dance Class',
  image6Alt: 'Retro Dance Instructors',
  image12Alt: 'Elegant Retro Dance Studio Logo',
  action1: 'Explore Classes',
  image10Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image11Alt: 'Retro Dance Studio Signage',
  image4Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image9Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Src:
    'https://images.unsplash.com/photo-1505527385992-63e06a393342?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGRhbmNlfGVufDB8fHx8MTczMTUwNDUzNHww&ixlib=rb-4.0.3&w=1500',
  image10Alt: 'Vintage Dance Studio Exterior',
  image2Alt: 'Dancers in Vintage Attire',
  image7Alt: 'Elegant Tango Performance',
  content1:
    'Experience the charm of vintage dance styles in a modern setting at our studio. Join us for classes that blend elegance with retro vibes.',
  image3Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Alt: 'Elegant Retro Dance Studio Hero Image',
  image12Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Alt: 'Elegant Ballroom Dancing',
  image8Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image9Alt: 'Elegant Waltz Dance Lesson',
  image5Alt: 'Vintage Dance Studio Interior',
  image6Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image4Alt: 'Retro Jazz Dance Performance',
  image11Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  action2: 'Book a Trial Class',
  image5Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Welcome to Our Elegant Retro Dance Studio',
  image7Src:
    'https://images.unsplash.com/photo-1505527385992-63e06a393342?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGRhbmNlfGVufDB8fHx8MTczMTUwNDUzNHww&ixlib=rb-4.0.3&w=1500',
}

Hero.propTypes = {
  image2Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  action1: PropTypes.string,
  image10Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image9Src: PropTypes.string,
  image1Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image11Src: PropTypes.string,
  action2: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.string,
  image7Src: PropTypes.string,
}

export default Hero
