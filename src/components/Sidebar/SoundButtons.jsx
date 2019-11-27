import React, { useContext } from "react";

import { store } from "../../store/store";
import {
  turnSoundOff,
  turnSoundOn,
  turnMusicOn,
  turnMusicOff
} from "../../store/actions";

import OnOffButton from "./OnOffButton";

const SoundButtons = () => {
  const { state, dispatch } = useContext(store);
  const { sound, music } = state;

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
