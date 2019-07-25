import shuffle from 'lodash.shuffle';

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

const getChances = (currentChances, level) => {
  const newChances = [...currentChances];
  newChances[0] += 4 + level * 3;
  newChances[1] += 2 + level * 2;
  newChances[2] += 1 + level;
  return newChances;
};

const getRandomCards = (currentChances, level) => {
  const chances = getChances(currentChances, level);
  const randomNumber = getRandomInt();
  let numberOfCardsToMove = 0;

  const newChances = chances.map(chance => {
    if (randomNumber < chance) {
      numberOfCardsToMove += 2;
      return Math.floor(chance / 2);
    }
    return chance;
  });

  const cardsToSwap = getUniqueCards(numberOfCardsToMove);
  return [cardsToSwap, newChances];
};

export default getRandomCards;
