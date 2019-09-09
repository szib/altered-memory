import {
  TOGGLE_MUSIC,
  TOGGLE_SOUND,
  SELECT_DECK,
  SELECT_DIFFICULTY
} from "../actions/settings";

const initialState = {
  decks: ["original", "tech", "sports"],
  selectedDeck: "sports",
  difficulties: ["easy", "normal", "hard"],
  selectedDifficulty: "hard",
  music: false,
  sound: true
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC:
      return { ...state, music: !state.music };
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
