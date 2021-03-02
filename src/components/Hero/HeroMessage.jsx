import React from 'react';

// import components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

// import stylesheets
import './HeroMessage.css';

function HeroMessage() {
  return (
    <div className="hero-message">
      <Jumbotron className="jumbotron-hero">
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <p>
          Experience your favourite artists like never before and from the comfort of your own home.
        </p>
          <Button className="gradient-button">TRY IT NOW</Button>
      </Jumbotron>
    </div>
  )
}

export default HeroMessage
