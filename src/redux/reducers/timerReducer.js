import { TICK, TIMER_RESET } from "../actions/timerActions";

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case TICK:
      return state + 1;

    case TIMER_RESET:
      return 0;

    default:
      return state;
  }
};

export default timerReducer;
