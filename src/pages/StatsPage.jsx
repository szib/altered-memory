import React from 'react';
import { Link } from 'react-router-dom';

import tw from 'tailwind.macro';

import Button from '../components/Button';
import * as TW from '../components/TW';

const Item = tw.div`
  text-color5 
  font-body
  text-xl 
  text-center
  my-2
`;

const GameStarter = ({ machine }) => {
  const startGame = () => {
    machine.send('NEW_GAME');
  };

  const {
    score,
    fails,
    matches,
    turns,
    longestStreak,
    highestBonus,
  } = machine.context;

  return (
    <TW.Screen>
      <TW.Container style={tw`text-color5`}>
        <TW.Panel>
          <TW.Title>Stats</TW.Title>
          <Item>{`Score: ${score}`}</Item>
          <Item>{`Turns: ${turns}`}</Item>
          <Item>{`Matches: ${matches}`}</Item>
          <Item>{`Longest steak: ${longestStreak}`}</Item>
          <Item>{`Highest bonus: ${highestBonus}`}</Item>
          <Item>{`Fails: ${fails}`}</Item>
          <Button onClick={startGame}>New game</Button>
          <Link to="/" as={Button}>
            <Button>Back</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default GameStarter;
