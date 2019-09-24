export const TOGGLE_MUSIC = "TOGGLE_MUSIC";
export const TURN_MUSIC_ON = "TURN_MUSIC_ON";
export const TURN_MUSIC_OFF = "TURN_MUSIC_OFF";

export const TOGGLE_SOUND = "TOGGLE_SOUND";
export const TURN_SOUND_ON = "TURN_SOUND_ON";
export const TURN_SOUND_OFF = "TURN_SOUND_OFF";

export const SELECT_DECK = "SELECT_DECK";
export const SELECT_DIFFICULTY = "SELECT_DIFFICULTY";

export const toggleMusic = () => {
  return {
    type: TOGGLE_MUSIC
  };
};
export const turnMusicOn = () => {
  return {
    type: TURN_MUSIC_ON
  };
};
export const turnMusicOff = () => {
  return {
    type: TURN_MUSIC_OFF
  };
};

export const toggleSound = () => {
  return {
    type: TOGGLE_SOUND
  };
};
export const turnSoundOn = () => {
  return {
    type: TURN_SOUND_ON
  };
};
export const turnSoundOff = () => {
  return {
    type: TURN_SOUND_OFF
  };
};

export const selectDeck = selectedDeck => {
  return {
    type: SELECT_DECK,
    selectedDeck
  };
};

export const selectDifficulty = selectedDifficulty => {
  return {
    type: SELECT_DIFFICULTY,
    selectedDifficulty
  };
};
