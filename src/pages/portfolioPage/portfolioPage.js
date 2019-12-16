import { Button, Container, Form } from 'react-bootstrap';

import Navbar from '../../components/navbar/navbar';
import React from 'react';
import moonImage from '../../resources/moon.png';

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
            <Form style={{marginTop: '10px'}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button>Add</Button>
            </Form>
        </Container>
        </body>
    </div>
  );
}

export default Homepage;

