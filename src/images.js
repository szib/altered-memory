import backImage from './assets/images/back.svg';

const importAll = r => {
  const images = {};
  r.keys().forEach((item, idx) => {
    images[idx] = r(item);
  });
  return images;
};

const original = importAll(
  require.context('./assets/images/original', false, /\.(png|jpe?g|svg)$/)
);

const sports = importAll(
  require.context('./assets/images/sports', false, /\.(png|jpe?g|svg)$/)
);

export const cardImages = {
  original,
  sports,
};

export { backImage };
