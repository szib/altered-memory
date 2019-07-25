import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './Game';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/" render={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
