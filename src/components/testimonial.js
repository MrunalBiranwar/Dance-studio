import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Alt: 'Image of Michael Smith',
  author4Src:
    'https://images.unsplash.com/photo-1666885181383-8e68bc409821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUwMzAxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1500649297466-74794c70acfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUwMzAxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'I absolutely love the salsa classes here! The instructors are top-notch, and the atmosphere is so welcoming.',
  author4Alt: 'Image of David Lee',
  author4Position: 'Ballroom Dancer',
  author1Alt: 'Image of Emily Johnson',
  author2Name: 'Michael Smith',
  author2Src:
    'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUwMzAxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    "Hip hop classes at this studio are energetic and fun! I've learned so much and made great friends along the way.",
  author4Name: 'David Lee',
  content1:
    'Read what our students have to say about their experience at our dance studio.',
  author3Name: 'Sophia Rodriguez',
  review4:
    'The ballroom dance classes are simply fantastic. The instructors are patient and skilled, making learning a joy.',
  author3Position: 'Hip Hop Fanatic',
  author1Src:
    'https://images.unsplash.com/photo-1631856952652-be1d386e1869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUwMzAxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'Emily Johnson',
  author3Alt: 'Image of Sophia Rodriguez',
  author2Position: 'Ballet Lover',
  review2:
    'Attending ballet classes here has been a dream come true. The attention to detail and technique is exceptional.',
  author1Position: 'Salsa Enthusiast',
  heading1: 'Testimonials',
}

Testimonial.propTypes = {
  author2Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  review1: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.string,
  author4Name: PropTypes.string,
  content1: PropTypes.string,
  author3Name: PropTypes.string,
  review4: PropTypes.string,
  author3Position: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
  author1Position: PropTypes.string,
  heading1: PropTypes.string,
}

export default Testimonial
