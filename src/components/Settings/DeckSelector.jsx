import React, { useContext } from "react";

import { store } from "../../store/store";
import { selectDeck } from "../../store/actions";

import tw from "tailwind.macro";

import DeckImages from "./DeckImages";
import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

import { cardImages } from "../../images";

const DeckSelector = () => {
  const { state, dispatch } = useContext(store);
  const { decks, selectedDeck } = state;
  const images = cardImages[selectedDeck];

  return (
    <div style={tw`my-6`}>
      <Text>Deck</Text>
      <div style={tw`flex justify-center items-center`}>
        {decks.map(deck => (
          <SettingsButton
            key={deck}
            onClick={() => dispatch(selectDeck(deck))}
            active={selectedDeck === deck}
          >
            {deck}
          </SettingsButton>
        ))}
      </div>
      {images && <DeckImages images={images} />}
    </div>
  );
};

export default DeckSelector;
