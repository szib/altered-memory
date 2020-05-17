import React, { createContext, useReducer } from "react";
import initialState from "./initialState";

import {
  TOGGLE_MUSIC,
  TURN_MUSIC_ON,
  TURN_MUSIC_OFF,
  TOGGLE_SOUND,
  TURN_SOUND_ON,
  TURN_SOUND_OFF,
  SELECT_DECK,
  SELECT_DIFFICULTY,
  SELECT_THEME
} from "./actions";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
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
      case SELECT_THEME:
        if (state.themeList.indexOf(action.theme) < 0) return state;
        return { ...state, selectedTheme: action.theme };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
