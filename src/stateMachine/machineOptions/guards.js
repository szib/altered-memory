const selectable = (context, event) => {
  const id = parseInt(event.cardId, 10);
  const card = context.cards.find(c => c.id === id);
  return card.selected === false && card.faceUp === false;
};

const isMatched = context => {
  const selectedCards = context.cards.filter(card => card.selected === true);
  return selectedCards[0].kind === selectedCards[1].kind;
};

const notAllFound = context =>
  context.cards.filter(card => card.found === false).length > 0;

const isPlayerDead = context => context.lives < 1;

const guards = {
  selectable,
  notAllFound,
  isMatched,
  isPlayerDead
};

export default guards;
