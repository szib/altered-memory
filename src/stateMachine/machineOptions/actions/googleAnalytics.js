/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga';

export const newGameGoogleAnalytics = () => {
  ReactGA.event({
    category: 'Game',
    action: 'Started a new game',
  });
};
