import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  turnSoundOff,
  turnSoundOn,
  turnMusicOn,
  turnMusicOff
} from "../../redux/actions/settings";

import OnOffButton from "./OnOffButton";

const SoundButtons = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { sound, music } = settings;

  return (
    <>
      <OnOffButton
        text="Music"
        turnOnHandler={() => dispatch(turnMusicOn())}
        turnOffHandler={() => dispatch(turnMusicOff())}
        isTurnedOn={music}
      />
      <OnOffButton
        text="Sounds"
        turnOnHandler={() => dispatch(turnSoundOn())}
        turnOffHandler={() => dispatch(turnSoundOff())}
        isTurnedOn={sound}
      />
    </>
  );
};

export default SoundButtons;
