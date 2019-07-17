import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import Item from "./InfoPanelItem";

const InfoPanel = ({ className, machine }) => {
  const { context } = machine;
  const { score, turn } = context;

  return (
    <div className={className}>
      <Item title="Score" value={score} />
      <Item title="Turn" value={turn} />
    </div>
  );
};

const StyledInfoPanel = styled(InfoPanel)`
  ${tw`bg-gray-900 text-gray-100`}
  ${tw`flex flex-col justify-around`}
`;

export default StyledInfoPanel;
