import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import * as TW from '../TW';

const Button = styled.div`
  ${tw`
    cursor-pointer
    m-2

    font-display
    text-xl
    text-dark-pen 
    bg-transparent
    border-none
    
    outline-none
    
    border-transparent
    border-solid
    border-0
    border-b-2

    hover:border-dark-pen

  `}
  ${props => (props.active ? tw`opacity-100` : tw`opacity-75`)}
`;

const Options = tw.div`
  flex justify-center items-center
`;

const DeckSelector = ({ clickHandler, activeDeck }) => {
  const decks = ['original', 'tech', 'sports'];

  return (
    <TW.Panel>
      <TW.Text>Deck</TW.Text>
      <Options>
        {decks.map(deck => (
          <Button
            key={deck}
            onClick={() => clickHandler(deck)}
            active={activeDeck === deck}
          >
            {deck}
          </Button>
        ))}
      </Options>
    </TW.Panel>
  );
};

export default DeckSelector;
