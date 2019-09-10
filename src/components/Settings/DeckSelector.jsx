import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDeck } from "../../redux/actions/settings";

import tw from "tailwind.macro";

import DeckImages from "./DeckImages";
import { Text } from "../TW";
import SettingsButton from "./SettingsButton";

import { cardImages } from "../../images";

const DeckSelector = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { decks, selectedDeck } = settings;
  const images = cardImages[selectedDeck];

  return (
    <>
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
    </>
  );
};

export default DeckSelector;
