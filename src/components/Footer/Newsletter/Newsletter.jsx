
import { useState } from "react";
import "./Newsletter.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Newsletter = () => {

    const [email,setEmail] = useState("")

    const handleChange = (e) => {
       setEmail( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const emailSubmitted = email
        console.log(emailSubmitted)
    }

  return (
    <div>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">newsletter</span>
          <span className="big-text">sign up for latest updates and offers</span>
          <form className="form">
            <input onSubmit={handleSubmit} type="email" placeholder="Email Address" />
            <button onClick={(e)=>handleChange(e)}>Subscribe</button>
          </form>
          <div className="text">
            Will be used in accordance with our privacy policy
          </div>
          <div className="social-icons">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
