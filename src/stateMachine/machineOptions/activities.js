import store from "../../redux/store";
import { tickAction } from "../../redux/actions/timerActions";

const ticking = (context, event) => {
  const interval = setInterval(() => {
    store.dispatch(tickAction());
    console.log("tick...");
  }, context.timerInterval);
  return () => clearInterval(interval);
};

const activities = {
  ticking
};

export default activities;
