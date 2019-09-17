import { SELECT_THEME } from "../actions/themes";

const initialState = {
  themeList: ["dark", "ocean", "pastel", "fire"],
  selectedTheme: "fire"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_THEME:
      if (state.themeList.indexOf(action.theme) < 0) return state;
      return { ...state, selectedTheme: action.theme };
    default:
      return state;
  }
};

export default themeReducer;
