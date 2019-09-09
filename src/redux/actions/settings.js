export const TOGGLE_SOUND = "TOGGLE_SOUND";
export const TOGGLE_MUSIC = "TOGGLE_MUSIC";
export const SELECT_DECK = "SELECT_DECK";
export const SELECT_DIFFICULTY = "SELECT_DIFFICULTY";

export const toggleMusic = () => {
  return {
    type: TOGGLE_MUSIC
  };
};

export const toggleSound = () => {
  return {
    type: TOGGLE_SOUND
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
