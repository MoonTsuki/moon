import './App.css';

import Button from 'react-bootstrap/Button';
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
    </div>
  );
}

export default App;
