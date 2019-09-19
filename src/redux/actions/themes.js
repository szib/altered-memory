export const SELECT_THEME = "SELECT_THEME";

export const selectTheme = theme => {
  return {
    type: SELECT_THEME,
    theme
  };
};
