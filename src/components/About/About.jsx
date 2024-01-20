import React from "react";
import Header from "../Header/Header";
import "./About.scss";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import logo_img from "../../assets/ARYAVARTA_TRAVELS.png";
import SwipeableTextMobileStepper from "./Carousel.jsx";

const About = () => {
  return (
    <div className="root-div">
      <Header />
      <div className="about-us-section">
        <div className="about-us-content">
          <div className="first-div">
            <div className="second-div">
              <img src={logo_img} alt="logo_img" width={80} height={80} />
              <h3>Together, we dare to maximise.</h3>
            </div>
            <p>
            We are maximisers. We're out on our own journeys to maximise - be the best at what we choose and 
            care about the most - whether it be our impact, voice, potential, ideas, influence, well-being or
             more. Because when we maximise ourselves in our inclusive teams, 
            Aryavarta Travels is able to deliver the best imaginable value for our customers, stakeholders 
            and the planet!
            </p>
          </div>

          <div className="third-div">
            <h1>Our Values</h1>

            {/* slider */}

            <SwipeableTextMobileStepper />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
