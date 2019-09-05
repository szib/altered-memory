import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import * as TW from "../TW";
import Options from "./Options";
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

const DeckSelector = ({
  difficultyHandler,
  deckHandler,
  activeDeck,
  activeDifficulty
}) => {
  const decks = ["original", "tech", "sports"];
  const difficulties = ["easy", "normal", "hard"];

  const images = cardImages[activeDeck];

  return (
    <TW.Panel>
      <Options title="Difficulty">
        {difficulties.map(difficulty => (
          <Button
            key={difficulty}
            onClick={() => difficultyHandler(difficulty)}
            active={activeDifficulty === difficulty}
          >
            {difficulty}
          </Button>
        ))}
      </Options>
      <Options title="Deck">
        {decks.map(deck => (
          <Button
            key={deck}
            onClick={() => deckHandler(deck)}
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
