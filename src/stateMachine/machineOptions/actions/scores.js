/* eslint-disable no-param-reassign */
export const addScore = context => {
  context.score += context.level * 5 + context.bonus;
};

export const increaseBonus = context => {
  context.bonus *= 2;
};

export const decreaseBonus = context => {
  const multiplyer = Math.floor(context.bonus / 3);
  if (multiplyer < 1) {
    context.bonus = 1;
  } else {
    context.bonus = multiplyer;
  }
};
