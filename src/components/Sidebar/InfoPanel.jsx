import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

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
  const { score, lives, level, bonusMultiplyer } = context;

  return (
    <StyledDiv className={className}>
      <Item title="Score" value={score} />
      <Item title="Bonus" value={bonusMultiplyer} />
      <Item title="Lives" value={lives} />
      <Item title="Level" value={level} />
    </StyledDiv>
  );
};

export default InfoPanel;
