import gameStates from './game';

const machineConfig = {
  id: 'game',
  initial: 'idle',

  states: {
    idle: {
      onEntry: ['preloadImages', 'resetContext', 'resetStats'],
      on: {
        START_GAME: 'running',
        SET_DECK: {
          target: 'idle',
          actions: ['setDeck'],
        },
      },
    },
    running: {
      on: {
        QUIT_GAME: 'cleanUp',
        'done.state.game.running.endGame': 'cleanUp',
      },
      ...gameStates,
    },
    cleanUp: {
      onEntry: ['removeCards'],
      after: {
        2000: { target: 'showingStats' },
      },
    },
    showingStats: {
      on: {
        NEW_GAME: 'idle',
      },
    },
  },
};

export default machineConfig;
