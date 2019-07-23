const gameStates = {
  id: 'game',
  initial: 'init',
  states: {
    init: {
      on: {
        '': 's0',
      },
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
        1: { target: 'endGame', cond: 'allFound' },
        2: { target: 's0' },
      },
      onExit: ['deselectCards', 'setFaceUp'],
    },
    endGame: {
      type: 'final',
    },
  },
};

export default gameStates;
