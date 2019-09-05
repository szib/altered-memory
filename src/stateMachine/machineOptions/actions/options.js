export const setDeck = (context, action) => {
  context.deckName = action.deckName;
};

export const setDifficulty = (context, action) => {
  context.difficulty = action.difficulty;
};
