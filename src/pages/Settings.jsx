import React from "react";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import * as TW from "../components/TW";

import DeckSelector from "../components/Settings/DeckSelector";
import DifficultySelector from "../components/Settings/DifficultySelector";
import ThemeSelector from "../components/Settings/ThemeSelector";

import withTransition from "../HOC/withTransition";

const Settings = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title uppercase>Game settings</TW.Title>
          <DeckSelector />
          <ThemeSelector />
          <DifficultySelector />
          <Link to="/game" as={Button}>
            <Button full>Start game</Button>
          </Link>
          <Link to="/" as={Button}>
            <Button full>Home</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default withTransition(Settings);
