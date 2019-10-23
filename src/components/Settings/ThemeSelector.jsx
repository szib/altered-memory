import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../redux/actions/themes";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const themes = useSelector(state => state.themes);
  const { themeList, selectedTheme } = themes;

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
