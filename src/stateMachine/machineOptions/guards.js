const selectable = (context, event) => {
  const id = parseInt(event.cardId, 10);
  const card = context.cards.find(c => c.id === id);
  return card.selected === false && card.faceUp === false;
};

const isMatched = context => {
  const selectedCards = context.cards.filter(card => card.selected === true);
  return selectedCards[0].kind === selectedCards[1].kind;
};

const allFound = context =>
  context.cards.filter(card => card.found === false).length === 0;

const guards = {
  selectable,
  allFound,
  isMatched,
};

export default guards;
