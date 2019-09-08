import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleMusic, toggleSound } from "../../redux/actions/settings";

import styled from "styled-components";
import tw from "tailwind.macro";

import Button from "../Button";
import Item from "./InfoPanelItem";

const StyledDiv = styled.div`
  ${tw`bg-dark-paper-alt text-dark-pen`}

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
  const settings = useSelector(state => state.settings);
  const { music, sound } = settings;
  const dispatch = useDispatch();

  const clickHandler = () => {
    machine.send("QUIT_GAME");
  };

  return (
    <StyledDiv className={className}>
      <Item title="Score" value={score} />
      <Item title="Bonus" value={bonus} />
      <Item title="Lives" value={lives} />
      <Item title="Level" value={level} />
      <Button onClick={() => dispatch(toggleSound())}>
        Sound {sound ? "On" : "Off"}
      </Button>
      <Button onClick={() => dispatch(toggleMusic())}>
        Music {music ? "On" : "Off"}
      </Button>
      <Button onClick={clickHandler}>Quit game</Button>
    </StyledDiv>
  );
};

export default InfoPanel;
