import { Col, Container, Row } from 'react-bootstrap';

import FlipCard from '../../components/flip-card/flip-card';
import Navbar from '../../components/navbar/navbar';
import React from 'react';
import moonImage from '../../resources/moon.png';
import profile1 from '../../resources/profilepic1.jpg';

function Homepage() {
  return (
      <div>
        <Navbar></Navbar>
        <header className="App-header">
        <h1>Welcome to the Moon!</h1>
        <img src={moonImage} className='animated'></img>
        </header>
        <body>
        <Container>
        <Row>
            <Col>
            <FlipCard 
                image={profile1} 
                name={'Aloysius Lim'}
                description={'FinTech / Security / FrontEnd Design'}
                title={'Skills'}
                buttonRoute={'/aloy'}
            />
            </Col>
            <Col>
            <FlipCard></FlipCard>
            </Col>
            <Col>
            <FlipCard></FlipCard>
            </Col>
        </Row>
        </Container>
        </body>
    </div>
  );
}

export default Homepage;

