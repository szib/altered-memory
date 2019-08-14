import { backImage, cardImages } from '../../../images';

export const logContext = context => {
  console.group('context');
  console.log(context);
  console.groupEnd();
};

export const preloadImages = () => {
  Object.values(cardImages).forEach(img => {
    new Image().src = img;
  });
  new Image().src = backImage;
};
