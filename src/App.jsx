import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './pages/Game';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/game" component={Game} />
        <Route path="/" render={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
