import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import * as TW from "../TW";
import DeckImages from "./DeckImages";

import { cardImages } from "../../images";

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

    border-dark-pen
    opacity-75
    hover:opacity-100

  `}
  ${props => (props.active ? tw`border-solid opacity-100` : tw`border-none`)}
`;

const Options = tw.div`
  flex justify-center items-center
`;

const DeckSelector = ({ clickHandler, activeDeck }) => {
  const decks = ["original", "tech", "sports"];

  const images = cardImages[activeDeck];

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
      {images && <DeckImages images={images} />}
    </TW.Panel>
  );
};

export default DeckSelector;
