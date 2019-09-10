import { backImage, cardImages } from "../../../images";

export const preloadImages = context => {
  const { selectedDeck } = context;
  Object.values(cardImages[selectedDeck]).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};
