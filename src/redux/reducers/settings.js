import {
  TOGGLE_MUSIC,
  TURN_MUSIC_ON,
  TURN_MUSIC_OFF,
  TOGGLE_SOUND,
  TURN_SOUND_ON,
  TURN_SOUND_OFF,
  SELECT_DECK,
  SELECT_DIFFICULTY
} from "../actions/settings";

const initialState = {
  decks: ["raphael", "feather"],
  selectedDeck: "raphael",
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
    case TURN_SOUND_ON:
      return { ...state, sound: true };
    case TURN_SOUND_OFF:
      return { ...state, sound: false };
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
