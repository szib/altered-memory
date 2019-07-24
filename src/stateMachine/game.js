const gameStates = {
  id: 'game',
  initial: 'init',
  states: {
    init: {
      onEntry: ['initCards', 'shuffleCards'],
      after: {
        1200: { target: 'showCards' },
      },
    },
    showCards: {
      onEntry: ['showCards'],
      after: {
        4000: { target: 's0' },
      },
      onExit: ['hideCards'],
    },
    s0: {
      on: {
        CLICK_ON_CARD: {
          target: 's1',
          cond: 'selectable',
        },
      },
      onExit: ['selectCard', 'setFaceUp'],
    },
    s1: {
      on: {
        CLICK_ON_CARD: {
          target: 's2',
          cond: 'selectable',
        },
      },
      onExit: ['selectCard', 'setFaceUp'],
    },
    s2: {
      onEntry: ['checkMatch'],
      after: {
        1: { target: 'match', cond: 'isMatched' },
        2: { target: 'noMatch' },
      },
    },
    noMatch: {
      onEntry: ['decrementLives'],
      after: {
        1: { target: 'endGame', cond: 'isPlayerDead' },
        2: { target: 'swappingCards' },
      },
    },
    swappingCards: {
      onEntry: ['swapCards'],
      after: {
        1000: { target: 's0' },
      },
      onExit: ['deselectCards', 'setFaceUp'],
    },
    match: {
      after: {
        1: { target: 'endLevel', cond: 'allFound' },
        2: { target: 's0' },
      },
      onExit: ['deselectCards', 'setFaceUp'],
    },
    endLevel: {
      onEntry: ['levelUp'],
      after: {
        2000: { target: 'init' },
      },
    },
    endGame: {
      type: 'final',
    },
  },
};

export default gameStates;
