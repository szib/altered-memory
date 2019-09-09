import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDifficulty } from "../../redux/actions/settings";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "./SettingsButton";

const DifficultySelector = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { difficulties, selectedDifficulty } = settings;

  return (
    <>
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
    </>
  );
};

export default DifficultySelector;
