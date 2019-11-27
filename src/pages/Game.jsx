import React, { useContext } from "react";

import { store } from "../store/store";

import styled from "styled-components";
import tw from "tailwind.macro";

import { useMachine } from "use-machine";
import machineOptions from "../stateMachine/machineOptions";
import machineConfig from "../stateMachine/index";
import machineContext from "../stateMachine/context";

import StatsPage from "./StatsPage";
import Board from "../components/Board/Board";
import InfoPanel from "../components/Sidebar/InfoPanel";
import withTransition from "../HOC/withTransition";

const AppDiv = styled.div`
  ${tw`w-screen h-screen`}
  display: grid;

  @media screen and (orientation: portrait) {
    grid-template-rows: auto 100px;

    grid-template-areas:
      "board"
      "info";
  }

  @media screen and (orientation: landscape) {
    grid-template-columns: auto 250px;

    grid-template-areas: "board info";
  }
`;

const Game = () => {
  // TODO: refactor settings
  const { state: settings } = useContext(store);
  const context = { ...machineContext, ...settings };

  const machine = useMachine(machineConfig, machineOptions, context);
  const { state, send } = machine;

  const clickOnCardHandler = id => {
    send("CLICK_ON_CARD", { cardId: id });
  };

  let component;
  switch (state.value) {
    case "showingStats":
      component = <StatsPage machine={machine} />;
      break;

    default:
      component = (
        <>
          <Board machine={machine} clickOnCardHandler={clickOnCardHandler} />
          <InfoPanel machine={machine} />
        </>
      );
      break;
  }

  return <AppDiv>{component}</AppDiv>;
};

export default withTransition(Game);
