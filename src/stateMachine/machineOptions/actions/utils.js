import { backImage, cardImages } from '../../../images';

// eslint-disable-next-line import/prefer-default-export
export const preloadImages = () => {
  Object.values(cardImages).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};
