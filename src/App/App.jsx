import React, { useContext } from "react";

import { store } from "../store/store";

import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { ThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";

import Music from "./Music";
import Game from "../pages/Game";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import Settings from "../pages/Settings";

const App = () => {
  const { state } = useContext(store);
  const { music } = state;
  const theme = useTheme();

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, loc => loc.pathname, {
    from: { opacity: 1, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 1, transform: "translate(-20%, 0)" }
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Music playing={music} />
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/about" exact component={About} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/game" exact component={Game} />
              <Route path="/" exact component={LandingPage} />
            </Switch>
          </animated.div>
        ))}
      </>
    </ThemeProvider>
  );
};

export default App;
