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
