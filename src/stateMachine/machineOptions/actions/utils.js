import { backImage, cardImages } from '../../../images';

// eslint-disable-next-line import/prefer-default-export
export const preloadImages = context => {
  const { deckName } = context;
  Object.values(cardImages[deckName]).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};
