import React from 'react';

import Button from '../components/Button';
import * as TW from '../components/TW';

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send('START_GAME');
  };

  const setDeck = deckName => {
    machine.send({ type: 'SET_DECK', deckName });
  };

  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title>Altered Memory</TW.Title>
          <Button onClick={() => setDeck('original')}>Original icons</Button>
          <Button onClick={() => setDeck('tech')}>Tech icons</Button>
          <Button onClick={startGame}>Start game</Button>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
