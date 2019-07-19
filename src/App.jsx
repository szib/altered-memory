import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import { useMachine } from "use-machine";
import machineOptions from "./stateMachine/machineOptions";
import machineConfig from "./stateMachine/index";
import machineContext from "./stateMachine/context";

import Board from "./components/Board/Board";
import BoardWrapper from "./components/Board/BoardWrapper";
import InfoPanel from "./components/Sidebar/InfoPanel";
import ControlPanel from "./components/Sidebar/ControlPanel";

const App = ({ className }) => {
  const machine = useMachine(machineConfig, machineOptions, machineContext);

  return (
    <div id="app" className={className}>
      <BoardWrapper>
        <Board machine={machine} />
      </BoardWrapper>
      <InfoPanel machine={machine} />
      <ControlPanel machine={machine} />
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
