import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <h1>Welcome to the Moon!</h1>
        <Button variant='light'>My First Button</Button>
      </header>
    </div>
  );
}

export default App;
