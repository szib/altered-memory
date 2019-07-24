import shuffle from 'lodash.shuffle';

const levels = [
  [10, 0, 0],
  [20, 0, 0],
  [20, 5, 0],
  [30, 5, 0],
  [40, 10, 0], // 5
  [50, 10, 1],
  [50, 15, 2],
  [60, 15, 3],
  [60, 20, 4],
  [70, 20, 5], // 10
  [70, 25, 6],
];

const getRandomInt = (min = 0, max = 99) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const getUniqueCards = numberOfCards => {
  const ids = Array(16)
    .fill()
    .map((x, i) => i);
  const shuffledIds = shuffle(ids).slice(0, numberOfCards);
  return shuffledIds;
};

const getRandomCards = level => {
  // return array of card ids to swap
  const chances = levels[level - 1] || [100, 100, 100];
  const randomNumber = getRandomInt();
  const numberOfCardsToMove = chances.filter(c => c >= randomNumber).length * 2;
  // console.log({ chances, randomNumber, numberOfCardsToMove });

  return getUniqueCards(numberOfCardsToMove);
};

export default getRandomCards;
