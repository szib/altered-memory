import React from "react";

import tw from "tailwind.macro";

import { Text } from "../TW";
import SettingsButton from "../SettingsButton";

const MusicOnOff = ({ text, turnOnHandler, turnOffHandler, isTurnedOn }) => {
  return (
    <div style={tw`my-4`}>
      <Text>{text}</Text>
      <div style={tw`flex justify-center items-center`}>
        <SettingsButton key="on" onClick={turnOnHandler} active={isTurnedOn}>
          On
        </SettingsButton>
        <SettingsButton key="off" onClick={turnOffHandler} active={!isTurnedOn}>
          Off
        </SettingsButton>
      </div>
    </div>
  );
};

export default MusicOnOff;
