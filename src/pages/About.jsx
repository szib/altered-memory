/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import * as TW from '../components/TW';
import { Github, LinkedIn } from '../components/Icons';

const LandingPage = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Title>Altered Memory</TW.Title>
        <TW.Text>
          Originally this game was a Mod3 project while I was doing Software
          Engineering bootcamp at Flatiron School. That was a pure Javascript
          game and in five days we had no time to include all the features we
          wanted.
        </TW.Text>
        <TW.Text>
          After graduation I rewrote the game - almost - from scratch using
          React. The code is not public at the moment, but I might make it open
          source in the future. For now you can have a look on the code of the
          &nbsp;
          <TW.A href="http://github.com/szib/altered-memory-frontend">
            original game.
          </TW.A>
        </TW.Text>

        <TW.Title>Author</TW.Title>
        <TW.Text>Ivan Szebenszki</TW.Text>

        <TW.Text>
          <Github />
          <LinkedIn />
        </TW.Text>
        <TW.Text>
          <Link to="/" as={Button}>
            <Button>Back</Button>
          </Link>
        </TW.Text>
      </TW.Container>
    </TW.Screen>
  );
};

export default LandingPage;
