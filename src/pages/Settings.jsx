import React from "react";

import tw from "tailwind.macro";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import * as TW from "../components/TW";

import DeckSelector from "../components/Settings/DeckSelector";
import DifficultySelector from "../components/Settings/DifficultySelector";
import ThemeSelector from "../components/Settings/ThemeSelector";
import MusicOnOFF from "../components/Settings/MusicOnOff";

import withTransition from "../HOC/withTransition";

const Settings = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title uppercase>Game settings</TW.Title>
          <DeckSelector />
          <ThemeSelector />
          <div style={tw`flex justify-around`}>
            <MusicOnOFF />
            <DifficultySelector />
          </div>
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
