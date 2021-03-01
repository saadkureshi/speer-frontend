import React from 'react';

// import components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheets
import './Red.css';

function Red() {
  return (
    <div className="red-page">
      <Container fluid>
        {/* <Row>
          <Col>menu</Col>
          <Col>button</Col>
        </Row> */}
        <Row className="text-image-row">
          <Col xs={6}>
            <Jumbotron className="jumbotron-red">
              <h1>SUPERIOR SOUND</h1>
              <p>
              Experience live versions of your favourite songs.
              </p>
                <Button>SEE DEMO</Button>
            </Jumbotron>
          </Col>
          <Col md="auto">
            <img className="speaker1" src="images/speaker-1.png" alt="speaker1"/>
          </Col>
          <Col md="auto">
            <img className="speaker2" src="images/speaker-2.png" alt="speaker2"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Red
