import React from 'react';

import * as TW from '../TW';
import Button from '../Button';

const DeckSelector = ({ clickHandler, activeDeck }) => {
  const decks = ['original', 'tech'];

  return (
    <TW.Panel>
      <TW.Text>Deck</TW.Text>
      {decks.map(deck => (
        <Button key={deck} onClick={() => clickHandler(deck)}>
          {deck === activeDeck ? `<< ${deck} >>` : deck}
        </Button>
      ))}
    </TW.Panel>
  );
};

export default DeckSelector;
