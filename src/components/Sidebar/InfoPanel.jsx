import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleMusic } from "../../redux/actions/settings";

import styled from "styled-components";
import tw from "tailwind.macro";

import Button from "../Button";
import Item from "./InfoPanelItem";
import { Music } from "../Icons";

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
  const { music } = settings;
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
      <div style={tw`flex justify-center w-2/3 self-center`}>
        <Music enabled={music} clickHandler={() => dispatch(toggleMusic())} />
      </div>
      <Button onClick={clickHandler}>Quit game</Button>
    </StyledDiv>
  );
};

export default InfoPanel;
