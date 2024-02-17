import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/embed/vstP_owMU7s?si=uEkMK_cLcLfVaxr4";

  return (
    <div className="about-section-container" style={{ marginTop: '8vh' }}>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <NewSlider />
      <div className="right-dept">
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        
        <p className="primary-text">Established in 1998, our Mechanical Engineering Department has seen remarkable growth, now admitting 180 students annually, up from an initial intake of 40</p>
  <p className="primary-text">Accredited by NBA in 2007, affirming our commitment to quality education</p>
  <p className="primary-text">Consistently achieving 119 university ranks since inception, reflecting our academic excellence</p>
  <p className="primary-text">Our faculty comprises 36 members, including 15 Ph.D. holders and 12 research supervisors, guiding 49 research scholars</p>
  <p className="primary-text">Recognized as a Research Centre by Anna University, empowering innovative research initiatives</p>
  <p className="primary-text">Equipped with state-of-the-art laboratories facilitating hands-on learning and innovation</p>
  <p className="primary-text">Encouraging student innovation, resulting in multiple projects honored as Best Innovative Projects by INAE</p>
        <div className="about-buttons-container">
          <a href="https://stjosephs.ac.in/index.html"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;