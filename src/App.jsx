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

const AppDiv = styled.div`
  ${tw`w-screen h-screen`}
  display: grid;

  grid-template-columns: auto 200px;
  grid-template-rows: 2fr 1fr;

  grid-template-areas:
    "board info"
    "board navbar";
`;

const App = ({ className }) => {
  const machine = useMachine(machineConfig, machineOptions, machineContext);
  const { context, send } = machine;

  const clickOnCardHandler = id => {
    send("CLICK_ON_CARD", { cardId: id });
  };

  return (
    <AppDiv className={className}>
      <BoardWrapper>
        <Board context={context} clickOnCardHandler={clickOnCardHandler} />
      </BoardWrapper>
      <InfoPanel machine={machine} />
      <ControlPanel machine={machine} />
    </AppDiv>
  );
};

export default App;
