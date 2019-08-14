import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Button from '../Button';
import Item from './InfoPanelItem';

const StyledDiv = styled.div`
  ${tw`bg-color2 text-color5`}

  @media screen and (orientation:portrait) {
    ${tw`flex flex-row justify-around`}
  }
  @media screen and (orientation: landscape) {
    ${tw`flex flex-col justify-around`}
  }
`;

const InfoPanel = ({ className, machine }) => {
  const { context } = machine;
  const { score, lives, level, bonus } = context;

  return (
    <StyledDiv className={className}>
      <Item title="Score" value={score} />
      <Item title="Bonus" value={bonus} />
      <Item title="Lives" value={lives} />
      <Item title="Level" value={level} />
      <Link to="/" as={Button}>
        <Button>Back</Button>
      </Link>
    </StyledDiv>
  );
};

export default InfoPanel;
