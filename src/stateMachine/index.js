import gameStates from './game';

const machineConfig = {
  id: 'game',
  initial: 'idle',

  states: {
    idle: {
      onEntry: ['preloadImages', 'resetContext'],
      after: {
        200: { target: 'running' },
      },
    },
    running: {
      on: {
        QUIT_GAME: 'idle',
        'done.state.game.running.endGame': 'cleanUp',
      },
      ...gameStates,
    },
    cleanUp: {
      after: {
        2000: { target: 'idle' },
      },
    },
  },
};

export default machineConfig;
