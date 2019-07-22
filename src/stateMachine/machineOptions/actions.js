/* eslint-disable no-param-reassign */
import { backImage, cardImages } from '../../images';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const incrementScore = context => {
  context.score += 1;
};

const incrementTurn = context => {
  context.provisionalScore = Math.round(context.provisionalScore * 0.9);
  context.turn += 1;
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
  context.turn = 0;
  context.score = 0;
  context.cards = [];
  context.time = 0;
};

const playClickSound = () => {
  // const clickSoundEl = document.createElement('audio');
  // clickSoundEl.src = clickSound;
  // clickSoundEl.play();
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

const swapCards = (context, event) => {
  // console.group('swap cards');
  // console.log('context', context);
  // console.log('event', event);
  // console.groupEnd();
  const firstId = event.firstId || getRandomInt(0, 15);
  const secondId = event.secondId || getRandomInt(0, 15);
  const tmp = context.cards[firstId].position;
  context.cards[firstId].position = context.cards[secondId].position;
  context.cards[secondId].position = tmp;
};

export default {
  // game.js
  incrementTurn,
  playClickSound,
  selectCard,
  deselectCards,
  setFaceUp,
  swapCards,

  // machine/indexedDB.js
  resetContext,
  initCards,
  shuffleCards,
  incrementScore,
  checkMatch,
  showCards,
  hideCards,
};
