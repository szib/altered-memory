import React from 'react';
import ReactGA from 'react-ga';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Button from '../Button';

const StyledDiv = styled.div`
  grid-area: navbar;
  ${tw`bg-color2 flex flex-col justify-center px-2`}
`;

const ControlPanel = ({ className, machine }) => {
  const { state } = machine;
  const isGameRunning = Object.prototype.hasOwnProperty.call(
    state.value,
    'running'
  );

  const newGameHandler = () => {
    ReactGA.event({
      category: 'Game',
      action: 'Started a new game',
    });
    machine.send('NEW_GAME');
  };

  return (
    <StyledDiv className={className}>
      {isGameRunning ? (
        <Button onClick={() => machine.send('QUIT_GAME')}>Quit</Button>
      ) : (
        <Button onClick={newGameHandler}>Start</Button>
      )}
      <Link to="/">
        <Button>Main menu</Button>
      </Link>
    </StyledDiv>
  );
};

export default ControlPanel;
