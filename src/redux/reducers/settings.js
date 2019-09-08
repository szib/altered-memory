import { TOGGLE_MUSIC, TOGGLE_SOUND } from "../actions/settings";

const initialState = {
  deckName: "original",
  difficulty: "normal",
  music: false,
  sound: true
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      return { ...state, music: !state.music };
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };

    default:
      return state;
  }
};

export default settingsReducer;
