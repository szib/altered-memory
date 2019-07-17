export const TICK = "TICK";
export const TIMER_RESET = "TIMER_RESET";

export const tickAction = () => {
  return {
    type: TICK
  };
};

export const timerResetAction = () => {
  return {
    type: TIMER_RESET
  };
};
