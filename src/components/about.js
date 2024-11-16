import React, { useEffect, useRef } from "react";
import "./about.css";
import Navbar from "./Navbar";
import Footer from "./footer";

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <Navbar />
      <div className="about-section">
        {/* About Us Section */}
        <div className="about-item">
          <div className="about-content animate-right" ref={addToRefs}>
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              The Danceworx comprises of The Danceworx Academy and The Danceworx
              Student Repertory Company. <br /> The Danceworx Academy was set up
              by Indian-Australian choreographer Ashley Lobo in November of 1998
              to teach dance along the lines of dance institutes overseas.
              Currently its curriculum consists of styles such as Jazz,
              Classical Ballet, Contemporary, Urban and Funk. Today, The
              Danceworx Academy has a huge student database spanning New Delhi,
              NCR and Mumbai. <br /> The Danceworx Student Repertory Company was
              set up with senior students hand-picked by the Artistic Director
              Ashley Lobo. These budding artists are given opportunities to
              perform, teach and choreograph. They have a special curriculum set
              by the Artistic Director.
            </p>
          </div>
          <img
            src="https://www.thedanceworx.com/images/aboutus-boy-1.png"
            alt="Dancer 1"
            className="about-image animate-left"
            ref={addToRefs}
          />
        </div>

        {/* Philosophy Section */}
        <div className="about-item">
          <div className="about-content animate-left" ref={addToRefs}>
            <h2 className="about-title">The Philosophy</h2>
            <p className="about-description">
              The Danceworx comprises of The Danceworx Academy and The Danceworx
              Student Repertory Company. <br /> The Danceworx Academy was set up
              by Indian-Australian choreographer Ashley Lobo in November of 1998
              to teach dance along the lines of dance institutes overseas.
              Currently its curriculum consists of styles such as Jazz,
              Classical Ballet, Contemporary, Urban and Funk. Today, The
              Danceworx Academy has a huge student database spanning New Delhi,
              NCR and Mumbai. <br /> The Danceworx Student Repertory Company was
              set up with senior students hand-picked by the Artistic Director
              Ashley Lobo. These budding artists are given opportunities to
              perform, teach and choreograph. They have a special curriculum set
              by the Artistic Director.
            </p>
          </div>
          <img
            src="https://www.thedanceworx.com/images/aboutus-girl.png"
            alt="Dancer 2"
            className="about-image animate-right"
            ref={addToRefs}
          />
        </div>

        {/* Vision Section */}
        <div className="about-item">
          <div class="shape shape1"></div>
          <div class="shape shape2"></div>
          <div class="shape shape3"></div>
          <div className="about-content animate-right" ref={addToRefs}>
            <h2 className="about-title">The Vision</h2>
            <p className="about-description">
              The Danceworx comprises of The Danceworx Academy and The Danceworx
              Student Repertory Company. <br /> The Danceworx Academy was set up
              by Indian-Australian choreographer Ashley Lobo in November of 1998
              to teach dance along the lines of dance institutes overseas.
              Currently its curriculum consists of styles such as Jazz,
              Classical Ballet, Contemporary, Urban and Funk. Today, The
              Danceworx Academy has a huge student database spanning New Delhi,
              NCR and Mumbai. <br /> The Danceworx Student Repertory Company was
              set up with senior students hand-picked by the Artistic Director
              Ashley Lobo. These budding artists are given opportunities to
              perform, teach and choreograph. They have a special curriculum set
              by the Artistic Director.
            </p>
          </div>
          <img
            src="https://www.thedanceworx.com/images/aboutus-boy-2.png"
            alt="Dancer 3"
            className="about-image animate-left"
            ref={addToRefs}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
