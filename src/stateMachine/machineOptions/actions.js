/* eslint-disable no-param-reassign */
import { backImage, cardImages } from '../../images';
import getRandomCards from './levels';

const decrementLives = context => {
  context.lives -= 1;
};

const selectCard = (context, event) => {
  const selectedCard = context.cards.find(
    card => card.id === parseInt(event.cardId, 10)
  );
  if (selectedCard) selectedCard.selected = true;
};

const deselectCards = context => {
  // eslint-disable-next-line no-return-assign
  context.cards.map(card => (card.selected = false));
};

const setFaceUp = context => {
  context.cards.map(card => {
    card.faceUp = card.found || card.selected;
    return card;
  });
};

const isMatch = cards => {
  const selectedCards = cards.filter(card => card.selected === true);
  return selectedCards[0].kind === selectedCards[1].kind;
};

const checkMatch = context => {
  if (isMatch(context.cards)) {
    // eslint-disable-next-line no-use-before-define
    playSuccessSound();
    context.score += context.provisionalScore;
    context.provisionalScore = 110;
    context.cards.map(c => {
      if (c.selected) c.found = true;
      return c;
    });
  } else {
    // eslint-disable-next-line no-use-before-define
    playFailSound();
  }
};

const initCards = context => {
  const cards = [];
  const boardSize = 4;
  for (let idx = 0; idx < 16; idx += 1) {
    const kind = idx % 8;
    const card = {
      id: idx,
      kind,
      selected: false,
      faceUp: false,
      found: false,
      backImage,
      frontImage: cardImages[kind],
      position: [idx % boardSize, Math.floor(idx / boardSize)],
    };
    cards.push(card);
  }
  context.cards = cards;
};

const shuffleCards = context => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...context.cards];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i].position, cards[j].position] = [
      cards[j].position,
      cards[i].position,
    ];
  }
  context.cards = cards;
};

const resetContext = context => {
  context.lives = 5;
  context.score = 0;
  context.cards = [];
  context.time = 0;
  context.level = 10;
};

const playFailSound = () => {
  // const clickSoundEl = document.createElement('audio');
  // clickSoundEl.src = failSound;
  // clickSoundEl.play();
};

const playSuccessSound = () => {
  // const clickSoundEl = document.createElement('audio');
  // clickSoundEl.src = successSound;
  // clickSoundEl.play();
};

const showCards = context => {
  context.cards.map(card => {
    card.faceUp = true;
    return card;
  });
};

const hideCards = context => {
  context.cards.map(card => {
    card.faceUp = false;
    return card;
  });
};

const swapCards = context => {
  const cards = getRandomCards(context.level);
  for (let idx = 0; idx < cards.length; idx += 2) {
    const firstId = cards[idx];
    const secondId = cards[idx + 1];
    const tmp = context.cards[firstId].position;
    context.cards[firstId].position = context.cards[secondId].position;
    context.cards[secondId].position = tmp;
  }
};

const levelUp = context => {
  context.level += 1;
};

export default {
  // game.js
  decrementLives,
  selectCard,
  deselectCards,
  setFaceUp,
  swapCards,
  levelUp,

  // machine/indexedDB.js
  resetContext,
  initCards,
  shuffleCards,
  checkMatch,
  showCards,
  hideCards,
};
