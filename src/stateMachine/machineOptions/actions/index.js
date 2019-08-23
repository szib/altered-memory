/* eslint-disable no-param-reassign */

import * as Cards from './cards';
import * as Logger from './logger';
import * as Utils from './utils';
import * as Scores from './scores';
import * as Stats from './stats';
import * as Options from './options';
import * as GoogleAnalytics from './googleAnalytics';

const decrementLives = context => {
  context.lives -= 1;
};

const isMatch = cards => {
  const selectedCards = cards.filter(card => card.selected === true);
  return selectedCards[0].kind === selectedCards[1].kind;
};

const checkMatch = context => {
  if (isMatch(context.cards)) {
    context.cards.map(c => {
      if (c.selected) c.found = true;
      return c;
    });
  }
};

const resetZIndex = context => {
  context.cards.map(card => {
    card.isMoving = false;
    return card;
  });
};

const resetContext = context => {
  context.isRunning = false;
  context.lives = 12;
  context.score = 0;
  context.level = 1;
  context.cards = [];
  context.bonus = 1;
  context.chances = [0, 0, 0];
};

const levelUp = context => {
  context.level += 1;
  const newChances = context.chances.map(chance => Math.floor(chance / 2));
  context.chances = newChances;
  context.lives += Math.ceil(context.level / 2);
  context.cards = [];
};

export default {
  ...GoogleAnalytics,
  ...Utils,
  ...Stats,
  ...Scores,
  ...Cards,
  ...Logger,
  ...Options,

  decrementLives,
  resetContext,
  checkMatch,
  levelUp,
  resetZIndex,
};
