import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Navbar from './components/navbar/navbar';
import React from 'react';
import moonImage from './resources/moon.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <h1>Welcome to the Moon!</h1>
        <Button variant='light'>My First Button</Button>
        <img src={moonImage} className='animated'></img>
      </header>
      <body>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text> Testing a long paragraph of nothingness and useless content </Card.Text>
                <Button variant="danger">Oh no.</Button>
              </Card.Body>
            </Card>
            </div>
            <div className='flip-card-back'> 
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text> Testing a long paragraph of nothingness and useless content </Card.Text>
                <Button variant="danger">Oh no.</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
