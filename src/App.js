import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from './pages/homepage/homepage.js';
import FunPage from './pages/funPage/funPage.js';
import PortfolioPage from './pages/portfolioPage/portfolioPage.js';
import React from 'react';

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/aloy">
          <PortfolioPage />
        </Route>
        <Route path="/fun">
          <FunPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <div className="App">
      </div>
    </Router>
  );
}

export default App;
