import gameActions from "./actions";
import gameGuards from "./guards";
import gameActivities from "./activities";

export default {
  guards: {
    ...gameGuards
  },

  actions: {
    ...gameActions
  },

  activities: {
    ...gameActivities
  }
};
