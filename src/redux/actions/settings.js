export const TOGGLE_SOUND = "TOGGLE_SOUND";
export const TOGGLE_MUSIC = "TOGGLE_MUSIC";

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
