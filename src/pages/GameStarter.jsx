import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Button from '../components/Button';
import * as TW from '../components/TW';

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send('START_GAME');
  };

  return (
    <TW.Screen>
      <TW.Container>
        <Button onClick={startGame}>Start game</Button>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
