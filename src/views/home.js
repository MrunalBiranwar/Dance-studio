import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Toast1 from "../components/toast1";
import Hero from "../components/hero";
import Features1 from "../components/features1";
import CTA from "../components/cta";
import Features2 from "../components/features2";
import Pricing from "../components/pricing";
import Steps from "../components/steps";
import Gallery8 from "../components/gallery8";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";
import SignIn3 from "../components/sign-in3";
import SignUp10 from "../components/sign-up10";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <Toast1
        button={
          <Fragment>
            <span className="home-text10">
              <span>Try Now</span>
              <br></br>
            </span>
          </Fragment>
        }
        bannerTitle={
          <Fragment>
            <span className="home-text13">New Classes start soon...</span>
          </Fragment>
        }
      ></Toast1>
      <Hero
        image1Src="https://images.unsplash.com/photo-1505527385992-63e06a393342?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGRhbmNlfGVufDB8fHx8MTczMTUwNDUzNHww&amp;ixlib=rb-4.0.3&amp;w=200"
        image2Src="https://images.unsplash.com/photo-1526631974657-8ba8d0e40008?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1504472163967-67e18fe3ca28?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1531318701087-32c11653dd77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1519689157479-930721ed8836?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1531947556702-6b7a7c64b83e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1526631880652-71a048b9b492?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1528312197634-81237efce1f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1518632661489-148f744fb48e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1536945120070-9d3131851462?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1518625814514-6ea480207e8f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero>
      <Features1 feature1ImgSrc="https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"></Features1>
      <CTA></CTA>
      <Features2 feature1ImgSrc="https://images.unsplash.com/photo-1526631134603-8d692d622f78?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxkYW5jZXxlbnwwfHx8fDE3MzE1MDQ1MzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"></Features2>
      <Pricing></Pricing>
      <Steps></Steps>
      <Gallery8
        content1={
          <Fragment>
            <span className="home-text14">
              Step back in time and experience the joy of vintage dance styles
              with our professional instructors.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text15">Explore Our Dance Styles</span>
          </Fragment>
        }
      ></Gallery8>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      {/* <SignIn3
        action1={
          <Fragment>
            <span className="home-text16">Sign In</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text17">Forgot Password?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text18">
              Sign in to access your account and book classes
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text19">Welcome back!</span>
          </Fragment>
        }
      ></SignIn3>
      <SignUp10
        action1={
          <Fragment>
            <span className="home-text20">Sign Up Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text21">
              Join Us for a Retro Dance Experience!
            </span>
          </Fragment>
        }
      ></SignUp10> */}
    </div>
  );
};

export default Home;
