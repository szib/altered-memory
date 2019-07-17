import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import Button from "./Button";

const ControlPanel = ({ className, send }) => (
  <div className={className}>
    <Button clickHandler={() => send("NEW_GAME")}>New game</Button>
    <Button clickHandler={() => send("QUIT_GAME")}>Quit</Button>
  </div>
);

const StyledControlPanel = styled(ControlPanel)`
  grid-area: navbar;
  ${tw`bg-gray-900 text-gray-100 flex flex-col justify-center`}
`;

export default StyledControlPanel;
