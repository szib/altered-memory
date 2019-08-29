/* eslint-disable no-param-reassign */
export const addScore = context => {
  context.score += context.level + context.bonus;
};

export const increaseBonus = context => {
  context.bonus += 1 + context.streak;
};

export const decreaseBonus = context => {
  const newBonus = Math.floor((context.bonus - 2) * 0.8);
  context.bonus = Math.max(1, newBonus);
};
