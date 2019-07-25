import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Button from './Button';

const StyledDiv = styled.div`
  grid-area: navbar;
  ${tw`bg-gray-900 text-gray-100 flex flex-col justify-center`}
`;

const ControlPanel = ({ className, machine }) => {
  const { state } = machine;
  const isGameRunning = Object.prototype.hasOwnProperty.call(
    state.value,
    'running'
  );

  return (
    <StyledDiv className={className}>
      {isGameRunning ? (
        <Button clickHandler={() => machine.send('QUIT_GAME')}>Quit</Button>
      ) : (
        <Button clickHandler={() => machine.send('NEW_GAME')}>Start</Button>
      )}
      <Link to="/">
        <Button>Main menu</Button>
      </Link>
    </StyledDiv>
  );
};

export default ControlPanel;
