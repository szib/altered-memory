import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";
import useMachine from "./hooks/useMachine";
import GameMachine from "./stateMachine";

import Board from "./components/Board/Board";
import InfoPanel from "./components/Sidebar/InfoPanel";
import ControlPanel from "./components/Sidebar/ControlPanel";

const App = ({ className }) => {
  const [current, send] = useMachine(GameMachine);

  return (
    <div id="app" className={className}>
      <Board current={current} send={send} />
      <InfoPanel current={current} />
      <ControlPanel current={current} send={send} />
    </div>
  );
};

const StyledApp = styled(App)`
  ${tw`w-screen h-screen`}
  display: grid;

  grid-template-columns: auto 200px;
  grid-template-rows: 2fr 1fr;

  grid-template-areas:
    "board info"
    "board navbar";
`;

export default StyledApp;
