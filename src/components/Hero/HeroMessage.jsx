import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './HeroMessage.css';

function HeroMessage() {
  return (
    <div className="hero-message">
      <Jumbotron>
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <p>
          Experience your favourite artists like never before and from the comfort of your own home.
        </p>
        <p>
          <Button variant="primary">TRY IT NOW</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default HeroMessage
