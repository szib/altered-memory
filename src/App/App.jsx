import React, { useContext } from "react";

import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Music from "./Music";

import Game from "../pages/Game";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, loc => loc.pathname, {
    from: { opacity: 1, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 1, transform: "translate(-20%, 0)" }
  });

  return (
    <>
      <Music playing={true} />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/game" exact component={Game} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
