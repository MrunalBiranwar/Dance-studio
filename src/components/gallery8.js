import React, { useState, useRef, useEffect } from "react";
import {FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Importing from react-icons
import PropTypes from "prop-types";
import "./gallery8.css"; // Ensure your CSS file is updated with the styles

const Gallery8 = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const media = [
    { type: "video", src: props.video1Src, alt: props.video1Alt },
    { type: "video", src: props.video2Src, alt: props.video2Alt },
    { type: "video", src: props.video3Src, alt: props.video3Alt },
  ];

  // Handle Slide Navigation
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);
  };


  

  // Video Progress Tracking
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressValue =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div id="gallery-section" className="gallery8-gallery3">
      <div className="gallery8-max-width">
        <div className="gallery8-section-title">
          <h2 className="gallery8-text1">
            {props.heading1 ?? "Explore Our Dance Styles"}
          </h2>
          <span className="gallery8-text2">
            {props.content1 ??
              "Step back in time and experience the joy of vintage dance styles with our professional instructors."}
          </span>
        </div>

        <div className="gallery8-container">
          <div className="gallery8-slider">
            {media[currentSlide].type === "image" ? (
              <img
                alt={media[currentSlide].alt}
                src={media[currentSlide].src}
                className="gallery8-image"
              />
            ) : (
              <div className="video-container">
                {/* Check if the video source is a YouTube URL */}
                {media[currentSlide].src.includes("youtube.com") ? (
                  <div className="iframe-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${new URL(media[currentSlide].src).searchParams.get(
                        "v"
                      )}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="gallery8-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={media[currentSlide].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}

            {/* Slider Navigation Buttons */}
            <div className="gallery8-slider-controls">
              <button className="gallery8-button-prev" onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button className="gallery8-button-next" onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery8.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  video1Src: PropTypes.string,
  video1Alt: PropTypes.string,
  video2Src: PropTypes.string,
  video2Alt: PropTypes.string,
  video3Src: PropTypes.string,
  video3Alt: PropTypes.string,
};

Gallery8.defaultProps = {
  heading1: "Explore Our Dance Styles",
  content1:
    "Step back in time and experience the joy of vintage dance styles with our professional instructors.",
  image1Src: "https://www.youtube.com/watch?v=6d5SS0gS5bU&pp=ygUFc29uZ3M%3D",
  image1Alt: "Image 1",
  video1Src: "https://www.youtube.com/watch?v=RlPNh_PBZb4", // Example YouTube URL
  video1Alt: "Video 1",
  video2Src: "https://www.youtube.com/watch?v=XO8wew38VM8&pp=ygUFc29uZ3M%3D", // Example YouTube URL
  video2Alt: "Video 2",
  video3Src: "https://www.youtube.com/watch?v=ilNt2bikxDI&pp=ygUFc29uZ3M%3D", // Example YouTube URL
  video3Alt: "Video 3",
};

export default Gallery8;
