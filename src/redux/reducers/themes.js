import { SELECT_THEME } from "../actions/themes";

import { themeNames } from "../../config/themes";

const initialState = {
  themes: ["dark", "ocean"],
  theme: "ocean"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_THEME:
      if (themeNames.indexOf(action.theme) < 0) return state;
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export default themeReducer;
