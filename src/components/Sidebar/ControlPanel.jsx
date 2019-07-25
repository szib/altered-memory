import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Button from './Button';

const StyledDiv = styled.div`
  grid-area: navbar;
  ${tw`bg-gray-900 text-gray-100 flex flex-col justify-center`}
`;

const ControlPanel = ({ className, machine }) => (
  <StyledDiv className={className}>
    <Button clickHandler={() => machine.send('NEW_GAME')}>New game</Button>
    <Button clickHandler={() => machine.send('QUIT_GAME')}>Quit</Button>
    <Link to="/">
      <Button>Back</Button>
    </Link>
  </StyledDiv>
);

export default ControlPanel;
