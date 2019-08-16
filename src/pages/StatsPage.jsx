import React from 'react';

import tw from 'tailwind.macro';

import Button from '../components/Button';
import * as TW from '../components/TW';
import Item from '../components/Sidebar/InfoPanelItem';

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send('NEW_GAME');
  };

  const { score, fails, matches, turns, longestStreak } = machine.context;

  return (
    <TW.Screen>
      <TW.Container style={tw`text-color5`}>
        <Item title="Score" value={score} />
        <Item title="Turns" value={turns} />
        <Item title="Matches" value={matches} />
        <Item title="Longest steak" value={longestStreak} />

        <Item title="Fails" value={fails} />
        <Button onClick={startGame}>New game</Button>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
