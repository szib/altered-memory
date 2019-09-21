import React from "react";
import { Link } from "react-router-dom";

import tw from "tailwind.macro";

import Button from "../components/Button";
import * as TW from "../components/TW";
import StatItem from "../components/StatItem";

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send("NEW_GAME");
  };

  const {
    score,
    fails,
    matches,
    turns,
    longestStreak,
    highestBonus
  } = machine.context;

  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title>Game statistics</TW.Title>
          <StatItem title="Turns" value={turns}></StatItem>
          <StatItem title="Score" value={score}></StatItem>
          <StatItem title="Matches" value={matches}></StatItem>
          <StatItem title="Longest streak" value={longestStreak}></StatItem>
          <StatItem title="Highest bonus" value={highestBonus}></StatItem>
          <StatItem title="Fails" value={fails}></StatItem>
          <Button full onClick={startGame} style={tw`mt-6`}>
            Start new game
          </Button>
          <Link to="/settings" as={Button}>
            <Button full>Game settings</Button>
          </Link>
          <Link to="/" as={Button}>
            <Button full>Home</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
