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

const tech = importAll(
  require.context('./assets/images/tech', false, /\.(png|jpe?g|svg)$/)
);

const sports = importAll(
  require.context('./assets/images/sports', false, /\.(png|jpe?g|svg)$/)
);

export const cardImages = {
  original,
  tech,
  sports,
};

export { backImage };
