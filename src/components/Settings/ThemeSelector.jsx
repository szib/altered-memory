import React, { useContext } from "react";

import { store } from "../../store/store";
import { selectTheme } from "../../store/actions";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

const ThemeSelector = () => {
  const { state, dispatch } = useContext(store);
  const { themeList, selectedTheme } = state;

  return (
    <div style={tw`my-4`}>
      <Text>Themes</Text>
      <div style={tw`flex justify-center items-center`}>
        {themeList.map(theme => (
          <SettingsButton
            key={theme}
            onClick={() => dispatch(selectTheme(theme))}
            active={selectedTheme === theme}
          >
            {theme}
          </SettingsButton>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
