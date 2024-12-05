import React from 'react';
import { Carousel } from 'antd';
import './LoginCarousel.css';

const CarouselComponent = () => {
  return (
    <div className="login-image">
      <div className="login-image-overlay">
        <h1>Welcome to Our Platform</h1>
        <p>Join our community to unlock exclusive features and opportunities.</p>
      </div>
      <Carousel autoplay className="carousel-container">
        <div>
          <img src="/login.png" alt="Slide 1" className="carousel-image" />
        </div>
        <div>
          <img src="/image.jpg" alt="Slide 2" className="carousel-image" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
