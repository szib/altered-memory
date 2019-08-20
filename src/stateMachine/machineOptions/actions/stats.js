/* eslint-disable no-param-reassign */
export const incrementFails = context => {
  context.fails += 1;
};

export const incrementMatches = context => {
  context.matches += 1;
};

export const incrementTurns = context => {
  context.turns += 1;
};

export const incrementStreak = context => {
  context.streak += 1;
  if (context.longestStreak < context.streak)
    context.longestStreak = context.streak;
};

export const resetStreak = context => {
  context.streak = 0;
};

export const setHighestBonus = context => {
  const { bonus } = context;
  if (bonus > context.highestBonus) context.highestBonus = bonus;
};

export const resetStats = context => {
  context.turns = 0;
  context.matches = 0;
  context.fails = 0;
  context.streak = 0;
  context.longestStreak = 0;
  context.highestBonus = 1;
};
