import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { turnMusicOff, turnMusicOn } from "../../redux/actions/settings";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../Settings/SettingsButton";

const MusicOnOff = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { music } = settings;

  return (
    <div style={tw`my-4`}>
      <Text>Music</Text>
      <div style={tw`flex justify-center items-center`}>
        <SettingsButton
          key="on"
          onClick={() => dispatch(turnMusicOn())}
          active={music}
        >
          On
        </SettingsButton>
        <SettingsButton
          key="off"
          onClick={() => dispatch(turnMusicOff())}
          active={!music}
        >
          Off
        </SettingsButton>
      </div>
    </div>
  );
};

export default MusicOnOff;