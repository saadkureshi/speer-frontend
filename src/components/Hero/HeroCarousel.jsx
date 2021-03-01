import React from 'react';

// import components
import Carousel from 'react-bootstrap/Carousel';
import HeroMessage from './HeroMessage';

// import stylesheets
import './HeroCarousel.css';

function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="images/hero-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <HeroMessage />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="images/hero-2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <HeroMessage />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="images/hero-3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <HeroMessage />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroCarousel
