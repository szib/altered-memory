import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { turnSoundOff, turnSoundOn } from "../../redux/actions/settings";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

const SoundOnOff = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { sound } = settings;

  return (
    <div style={tw`my-4`}>
      <Text>Sounds</Text>
      <div style={tw`flex justify-center items-center`}>
        <SettingsButton
          key="on"
          onClick={() => dispatch(turnSoundOn())}
          active={sound}
        >
          On
        </SettingsButton>
        <SettingsButton
          key="off"
          onClick={() => dispatch(turnSoundOff())}
          active={!sound}
        >
          Off
        </SettingsButton>
      </div>
    </div>
  );
};

export default SoundOnOff;
