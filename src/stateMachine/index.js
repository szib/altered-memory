import gameStates from "./game";

const machineConfig = {
  id: "game",
  initial: "idle",

  states: {
    idle: {
      onEntry: ["resetContext", "resetStats"],
      on: {
        START_GAME: "running",
        SET_DECK: {
          target: "idle",
          actions: ["setDeck", "preloadImages"]
        }
      }
    },
    running: {
      on: {
        QUIT_GAME: "cleanUp",
        "done.state.game.running.endGame": "cleanUp"
      },
      ...gameStates
    },
    cleanUp: {
      after: {
        1200: { target: "showingStats" }
      },
      onExit: ["removeCards"]
    },
    showingStats: {
      on: {
        NEW_GAME: "idle"
      }
    }
  }
};

export default machineConfig;
