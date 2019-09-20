import backImage from "./assets/images/back.svg";

const importAll = r => {
  const images = {};
  r.keys().forEach((item, idx) => {
    images[idx] = r(item);
  });
  return images;
};

const raphael = importAll(
  require.context("./assets/images/original", false, /\.(png|jpe?g|svg)$/)
);

const feather = importAll(
  require.context("./assets/images/feather", false, /\.(png|jpe?g|svg)$/)
);

export const cardImages = {
  raphael,
  feather
};

export { backImage };
