import React from "react";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import * as TW from "../components/TW";

import DeckSelector from "../components/Options/DeckSelector";

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send("START_GAME");
  };

  const setDeck = deckName => {
    machine.send({ type: "SET_DECK", deckName });
  };

  const setDifficulty = difficulty => {
    machine.send({ type: 'SET_DIFFICULTY', difficulty });
  };

  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title>Altered Memory</TW.Title>
          <DeckSelector
            deckHandler={setDeck}
            difficultyHandler={setDifficulty}
            activeDeck={machine.context.deckName}
            activeDifficulty={machine.context.difficulty}
          />
          <Button onClick={startGame}>Start game</Button>
          <Link to="/" as={Button}>
            <Button>Back</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
