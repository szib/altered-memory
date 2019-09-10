/* eslint-disable no-param-reassign */

import { backImage, cardImages } from "../../../images";
import getRandomCards from "./levels";

export const selectCard = (context, event) => {
  const selectedCard = context.cards.find(
    card => card.id === parseInt(event.cardId, 10)
  );
  if (selectedCard) selectedCard.selected = true;
};

export const deselectCards = context => {
  context.cards.forEach(card => {
    card.selected = false;
  });
};

export const setFaceUp = context => {
  context.cards.map(card => {
    card.faceUp = card.found || card.selected;
    return card;
  });
};

export const showCards = context => {
  context.cards.map(card => {
    card.faceUp = true;
    return card;
  });
};

export const hideCards = context => {
  context.cards.map(card => {
    card.faceUp = false;
    return card;
  });
};

export const swapCards = context => {
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

export const initCards = context => {
  const { selectedDeck } = context;
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
      frontImage: cardImages[selectedDeck][kind],
      position: [idx % boardSize, Math.floor(idx / boardSize)],
      isMoving: false
    };
    cards.push(card);
  }
  context.cards = cards;
};

export const shuffleCards = context => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...context.cards];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i].position, cards[j].position] = [
      cards[j].position,
      cards[i].position
    ];
  }
  context.cards = cards;
};

export const removeCards = context => {
  context.cards = [];
};
