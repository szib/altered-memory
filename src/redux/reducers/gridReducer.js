import { backImage, cardImages } from "../../images";
import { INIT_CARDS, SHUFFLE_CARDS } from "../actions/gridActions";

const generateCards = () => {
  const cards = [];
  for (let idx = 0; idx < 16; idx += 1) {
    const kind = idx % 8;
    const card = {
      id: idx,
      kind,
      selected: false,
      faceUp: false,
      found: false,
      backImage,
      frontImage: cardImages[kind]
    };
    cards.push(card);
  }
  return cards;
};

const shuffle = originalCards => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...originalCards];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const gridReducer = (state = generateCards(), action) => {
  switch (action.type) {
    case INIT_CARDS:
      return generateCards();

    case SHUFFLE_CARDS:
      return shuffle(state);
    default:
      return state;
  }
};

export default gridReducer;
