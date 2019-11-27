import React, { useContext } from "react";

import { store } from "../../store/store";

import styled from "styled-components";
import tw from "tailwind.macro";

import Button from "../Button";
import Item from "./InfoPanelItem";

import Sounds from "./Sounds";
import SoundButtons from "./SoundButtons";

const StyledDiv = styled.div`
  ${props => props.theme.infopanel}

  @media screen and (orientation:portrait) {
    ${tw`flex flex-row justify-around`}
  }
  @media screen and (orientation: landscape) {
    ${tw`flex flex-col justify-around`}
  }
`;

const InfoPanel = ({ machine }) => {
  const { context } = machine;
  const { score, lives, level, bonus } = context;
  const { state } = useContext(store);
  const { sound } = state;

  const clickHandler = () => {
    machine.send("QUIT_GAME");
  };

  return (
    <StyledDiv>
      <Item title="Score" value={score} />
      <Item title="Bonus" value={bonus} />
      <Item title="Lives" value={lives} />
      <Item title="Level" value={level} />
      <div style={tw`flex justify-center w-2/3 self-center`}>
        {sound && <Sounds />}
        <SoundButtons />
      </div>
      <Button onClick={clickHandler}>Quit game</Button>
    </StyledDiv>
  );
};

export default InfoPanel;
