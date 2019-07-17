import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import tw from "tailwind.macro";

import Item from "./InfoPanelItem";

const InfoPanel = ({ className, current }) => {
  const { context } = current;
  const { score, turn } = context;

  const timer = useSelector(state => state.timer);

  return (
    <div className={className}>
      <Item title="Score" value={score} />
      <Item title="Turn" value={turn} />
      <Item title="Time" value={timer} />
    </div>
  );
};

const StyledInfoPanel = styled(InfoPanel)`
  ${tw`bg-gray-900 text-gray-100`}
  ${tw`flex flex-col justify-around`}
`;

export default StyledInfoPanel;
