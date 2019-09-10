import {
  TOGGLE_MUSIC,
  TURN_MUSIC_ON,
  TURN_MUSIC_OFF,
  TOGGLE_SOUND,
  SELECT_DECK,
  SELECT_DIFFICULTY
} from "../actions/settings";

const initialState = {
  decks: ["original", "tech", "sports"],
  selectedDeck: "original",
  difficulties: ["easy", "normal", "hard"],
  selectedDifficulty: "normal",
  music: false,
  sound: true
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      return { ...state, music: !state.music };
    case TURN_MUSIC_ON:
      return { ...state, music: true };
    case TURN_MUSIC_OFF:
      return { ...state, music: false };
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };
    case SELECT_DECK:
      if (state.decks.indexOf(action.selectedDeck) < 0) return state;
      return {
        ...state,
        selectedDeck: action.selectedDeck
      };
    case SELECT_DIFFICULTY:
      if (state.difficulties.indexOf(action.selectedDifficulty) < 0)
        return state;
      return {
        ...state,
        selectedDifficulty: action.selectedDifficulty
      };

    default:
      return state;
  }
};

export default settingsReducer;