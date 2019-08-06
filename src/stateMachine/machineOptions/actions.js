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
    context.cards.map(c => {
      if (c.selected) c.found = true;
      return c;
    });
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
      isMoving: false,
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

const resetZIndex = context => {
  context.cards.map(card => {
    card.isMoving = false;
    return card;
  });
};

const resetContext = context => {
  context.lives = 20;
  context.score = 0;
  context.cards = [];
  context.time = 0;
  context.level = 1;
  context.chances = [0, 0, 0];
  context.bonusMultiplyer = 1;
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
  const [cardsToSwap, newChances] = getRandomCards(
    context.chances,
    context.level
  );
  context.chances = newChances;

  for (let idx = 0; idx < cardsToSwap.length; idx += 2) {
    const firstId = cardsToSwap[idx];
    const secondId = cardsToSwap[idx + 1];
    const tmp = context.cards[firstId].position;
    context.cards[firstId].position = context.cards[secondId].position;
    context.cards[secondId].position = tmp;
    context.cards[firstId].isMoving = true;
    context.cards[secondId].isMoving = true;
  }
};

const levelUp = context => {
  context.level += 1;
  const newChances = context.chances.map(chance => Math.floor(chance / 2));
  context.chances = newChances;
  context.lives += Math.ceil(context.level / 2);
  context.cards = [];
};

const addScore = context => {
  context.score += 10 * context.bonusMultiplyer;
};

const increaseBonus = context => {
  context.bonusMultiplyer += 1;
};

const decreaseBonus = context => {
  const multiplyer = context.bonusMultiplyer - 2;
  if (multiplyer < 1) {
    context.bonusMultiplyer = 1;
  } else {
    context.bonusMultiplyer = multiplyer;
  }
};

const preloadImages = () => {
  Object.values(cardImages).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};

export default {
  // game.js
  decrementLives,
  selectCard,
  deselectCards,
  setFaceUp,
  swapCards,
  levelUp,
  resetZIndex,

  // machine/indexedDB.js
  resetContext,
  initCards,
  shuffleCards,
  checkMatch,
  showCards,
  hideCards,

  addScore,
  increaseBonus,
  decreaseBonus,

  preloadImages,
};
