/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import * as TW from '../components/TW';
import withTransition from '../HOC/withTransition';

const LandingPage = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Title>Altered Memory</TW.Title>
        <TW.Text>It's not rocket science.</TW.Text>
        <TW.Text>Just memorize them.</TW.Text>
        <TW.Text>Then find them.</TW.Text>
        <TW.Text>Oh. One more thing...</TW.Text>
        <TW.Text>You really do not want to make mistakes...</TW.Text>
        <TW.Text>
          <Link to="/game" as={Button}>
            <Button>Start game</Button>
          </Link>
        </TW.Text>
        <TW.Text>
          <Link to="/about" as={Button}>
            <Button>About</Button>
          </Link>
        </TW.Text>
      </TW.Container>
    </TW.Screen>
  );
};

export default withTransition(LandingPage);
