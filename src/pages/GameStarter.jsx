import React from 'react';

import Button from '../components/Button';
import * as TW from '../components/TW';

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send('START_GAME');
  };

  return (
    <TW.Screen>
      <TW.Container>
        <TW.Text>[TODO: settings panel]</TW.Text>
        <Button onClick={startGame}>Start game</Button>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
