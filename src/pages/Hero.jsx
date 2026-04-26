import React from "react";
import "./Hero.css";
import Imu from "../assets/danish-profile.jpg";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hello, i am Danish</h2>

        <h3 className="tagline">
          I do UI/UX Design, Mobile Application Development and Video Editing
        </h3>
        
       
          
        
        <p className="paragraph">
          I'm passionate about building high-quality web and mobile
          applications. I focus on bringing ideas to life through clean,
          reliable code and user-friendly design. Whether I'm developing a
          mobile app or editing professional video content, I enjoy taking on
          new challenges and working with others to deliver great results.
          Let's connect and start building something impactful together!
        </p>
      </div>
      <img src={Imu} alt="Fiz" className="hero-image" />
    </div>
    <div className="hero-meta">
      <p className="profile-views">
        <img
          src="https://komarev.com/ghpvc/?username=itsfiz&label=Profile%20views&color=ce3636&style=flat"
          alt="itsfiz"
        />
      </p>
      <div className="social-icons hero-social-icons">
        <a
          href="http://www.youtube.com/@Yuirist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube" />
        </a>
        <a
          href="https://instagram.com/_dnishj/profilecard/?igsh=bXU3cjkwdHprbWVt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
