import gameStates from "./game";

const machineConfig = {
  id: "game",
  initial: "idle",

  states: {
    idle: {
      onEntry: ["resetContext"],
      on: {
        NEW_GAME: "init"
      }
    },
    init: {
      onEntry: ["initCards", "shuffleCards", "showCards"],
      on: {
        QUIT_GAME: "idle"
      },
      after: {
        4000: { target: "running" }
      },
      onExit: ["hideCards"]
    },
    running: {
      on: {
        QUIT_GAME: "idle",
        "done.state.game.running.endGame": "cleanUp"
      },
      ...gameStates
    },
    cleanUp: {
      after: {
        2000: { target: "idle" }
      }
    }
  }
};

export default machineConfig;
