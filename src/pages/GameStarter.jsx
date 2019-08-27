import React from 'react';

import Button from '../components/Button';
import * as TW from '../components/TW';

import DeckSelector from '../components/Options/DeckSelector';

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
          <DeckSelector
            clickHandler={setDeck}
            activeDeck={machine.context.deckName}
          />
          <Button onClick={startGame}>Start game</Button>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;