import React from 'react';

import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './pages/Game';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Helmet
        defaultTitle="Altered Memory"
        titleTemplate="Altered Memory :: %s"
      >
        <link
          href="https://fonts.googleapis.com/css?family=Orbitron:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/game" component={Game} />
        <Route path="/" render={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
