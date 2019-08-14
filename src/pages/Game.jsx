import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useMachine } from 'use-machine';
import machineOptions from '../stateMachine/machineOptions';
import machineConfig from '../stateMachine/index';
import machineContext from '../stateMachine/context';

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
    grid-template-columns: auto 200px;

    grid-template-areas: 'board info';
  }
`;

const Game = ({ className }) => {
  const machine = useMachine(machineConfig, machineOptions, machineContext);
  const { send } = machine;

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-145268762-1');
      ReactGA.pageview('/game');
    }
  }, []);

  const clickOnCardHandler = id => {
    send('CLICK_ON_CARD', { cardId: id });
  };

  return (
    <AppDiv className={className}>
      <Board machine={machine} clickOnCardHandler={clickOnCardHandler} />
      <InfoPanel machine={machine} />
    </AppDiv>
  );
};

export default Game;
