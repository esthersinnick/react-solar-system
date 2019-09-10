import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import Stars from './components/Stars';

import { BreakpointProvider } from 'react-socks';

import './App.css';

function App() {
  return (
    <Router>
      <BreakpointProvider>
        <div className="stars-bg">
          <Stars />
          <div className="sun"></div>
        </div>
        <header>
          <h1>The Solar System</h1>
        </header>
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/planet/:name" component={DetailPage} />
          </Switch>
        </main>
      </BreakpointProvider>
    </Router>
  );
}

export default App;