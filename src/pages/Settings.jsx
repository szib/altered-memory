import React from "react";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import * as TW from "../components/TW";

import DeckSelector from "../components/Settings/DeckSelector";
import DifficultySelector from "../components/Settings/DifficultySelector";

import withTransition from "../HOC/withTransition";

const Settings = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title>Altered Memory</TW.Title>
          <DeckSelector />
          <DifficultySelector />
          <Link to="/game" as={Button}>
            <Button>Start</Button>
          </Link>
          <Link to="/" as={Button}>
            <Button>Back</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default withTransition(Settings);
