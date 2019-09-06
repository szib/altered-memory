import { backImage, cardImages } from "../../../images";

export const preloadImages = context => {
  const { deckName } = context;
  Object.values(cardImages[deckName]).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};
