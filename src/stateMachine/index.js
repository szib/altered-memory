import gameStates from "./game";

const machineConfig = {
  id: "game",
  initial: "running",

  states: {
    running: {
      onEntry: ["resetContext", "resetStats"],
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
        NEW_GAME: "running"
      }
    }
  }
};

export default machineConfig;
