const gameStates = {
  id: 'game',
  initial: 'init',
  states: {
    init: {
      onEntry: ['startGame', 'initCards', 'shuffleCards'],
      after: {
        1200: { target: 'showCards' },
      },
    },
    showCards: {
      onEntry: ['showCards', 'newGameGoogleAnalytics'],
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
      onEntry: ['decrementLives', 'decreaseBonus'],
      after: {
        500: { target: 'endGame', cond: 'isPlayerDead' },
        1000: { target: 'swappingCards' },
      },
      onExit: ['deselectCards', 'setFaceUp'],
    },
    swappingCards: {
      onEntry: ['resetZIndex', 'swapCards'],
      on: {
        '': { target: 's0' },
      },
    },
    match: {
      onEntry: ['addScore'],
      after: {
        1: { target: 'endLevel', cond: 'allFound' },
        2: { target: 's0' },
      },
      onExit: ['increaseBonus', 'deselectCards', 'setFaceUp'],
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
