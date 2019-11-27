import React, { useContext } from "react";

import { store } from "../../store/store";
import { selectDifficulty } from "../../store/actions";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

const DifficultySelector = () => {
  const { state, dispatch } = useContext(store);
  const { difficulties, selectedDifficulty } = state;

  return (
    <div style={tw`my-4`}>
      <Text>Difficulty</Text>
      <div style={tw`flex justify-center items-center`}>
        {difficulties.map(difficulty => (
          <SettingsButton
            key={difficulty}
            onClick={() => dispatch(selectDifficulty(difficulty))}
            active={selectedDifficulty === difficulty}
          >
            {difficulty}
          </SettingsButton>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
