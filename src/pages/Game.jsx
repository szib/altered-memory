import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useMachine } from 'use-machine';
import machineOptions from '../stateMachine/machineOptions';
import machineConfig from '../stateMachine/index';
import machineContext from '../stateMachine/context';

import GameStarter from './GameStarter';
import StatsPage from './StatsPage';
import Board from '../components/Board/Board';
import InfoPanel from '../components/Sidebar/InfoPanel';

const AppDiv = styled.div`
  ${tw`w-screen h-screen`}
  display: grid;

  @media screen and (orientation: portrait) {
    grid-template-rows: auto 100px;

    grid-template-areas:
      'board'
      'info';
  }

  @media screen and (orientation: landscape) {
    grid-template-columns: auto 250px;

    grid-template-areas: 'board info';
  }
`;

const Game = ({ className }) => {
  const machine = useMachine(machineConfig, machineOptions, machineContext);
  const { state, send } = machine;

  const clickOnCardHandler = id => {
    send('CLICK_ON_CARD', { cardId: id });
  };

  if (state.value === 'idle') return <GameStarter machine={machine} />;
  if (state.value === 'showingStats') return <StatsPage machine={machine} />;

  return (
    <AppDiv className={className}>
      <Board machine={machine} clickOnCardHandler={clickOnCardHandler} />
      <InfoPanel machine={machine} />
    </AppDiv>
  );
};

export default Game;
