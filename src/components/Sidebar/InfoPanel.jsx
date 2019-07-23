import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Item from './InfoPanelItem';

const StyledDiv = styled.div`
  ${tw`bg-gray-900 text-gray-100`}
  ${tw`flex flex-col justify-around`}
`;

const InfoPanel = ({ className, machine }) => {
  const { context } = machine;
  const { score, lives, level } = context;

  return (
    <StyledDiv className={className}>
      <Item title="Score" value={score} />
      <Item title="Lives" value={lives} />
      <Item title="Level" value={level} />
    </StyledDiv>
  );
};

export default InfoPanel;
