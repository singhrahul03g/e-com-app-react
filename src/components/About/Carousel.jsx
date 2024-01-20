import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import newsLetterImg from "../../assets/newsletter-bg.jpeg";
import paymentImg from "../../assets/payments.png";
import bannerImg from "../../assets/banner-img.png";
import "./Carousel.scss";

export default function TextMobileStepper() {
  return (
    <Carousel
        swipeable={true}
        autoPlay={true}
      centerMode={true}
      centerSlidePercentage={30}
      infiniteLoop={true}
      interval={1500}
      showThumbs={false}
      stopOnHover={true}
    >
      <div className="carousel-item">
        <div className="carousel-img1">
          <h2>Integrity</h2>
          <p>We strive to do what is right and do what we say we will do.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-img2">
          <h2>Inclusion</h2>
          <p>
            We value the uniqueness in everyone, respect differences, and foster
            a sense of belonging.{" "}
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-img3">
          <h2>Audacity</h2>
          <p>We think big and take bold bets.</p>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-img4">
          <h2>Bias for Action</h2>
          <p>
            We have a strong sense of urgency to solve problems strategically.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-img5">
          {" "}
          <h2>Customer First</h2>
          <p>We look at the world from our customers’ point of view.</p>
        </div>
      </div>
    </Carousel>
  );
}
