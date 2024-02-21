import React, { useState, useEffect } from 'react';
import image01 from '../Assets/001.jpeg';
import image02 from '../Assets/002.jpeg';
import image03 from '../Assets/003.jpeg';
import image04 from '../Assets/004.jpeg';
import image05 from '../Assets/005.jpeg';
import image06 from '../Assets/006.jpeg';
import image07 from '../Assets/007.jpeg';
import image08 from '../Assets/008.jpeg';
// import image09 from '../Assets/009.jpeg';
// import image10 from '../Assets/010.jpeg';
// import image11 from '../Assets/011.png';
// import image12 from '../Assets/012.jpeg';
// import image13 from '../Assets/013.jpeg';
// import image14 from '../Assets/014.jpeg';

const Testimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const imageDetails = [
    "Details about image 01",
    "Details about image 02",
    "Details about image 03",
    "Details about image 04",
    "Details about image 05",
    "Details about image 06",
    "Details about image 07",
    "Details about image 08",
    "Details about image 09",
    "Details about image 10",
    "Details about image 11",
    "Details about image 12",
    "Details about image 13",
    "Details about image 14"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 8);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [ image07,  image03, image04,  image01, image06, image05, image08,image02];
    return images[index];
  };

  const containerStyle = {
    position:"relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px',
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
    marginTop: '5vh'
  };

  const detailsStyle = {
    position:"absolute",
    bottom:0,
    left:"25%",
    width:"50%",
    marginTop: '10px',
    backgroundColor:"black",
    color:"white",
    
    height:"5%"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop: '7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Testimonials</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
      {/* <div style={detailsStyle}>
        <p style={{backgroundColor:"black",padding:"7px 7px",}}>{imageDetails[imageIndex]}</p>
      </div> */}
    </div>
  );
};

export default Testimonial;