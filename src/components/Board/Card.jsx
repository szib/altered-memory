import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

const Card = ({ className, clickOnCardHandler, style }) => (
  <div className={className} style={style} onClick={clickOnCardHandler} />
);

const StyledCard = styled(Card)`
  box-sizing: border-box;

  width: 20vmin;
  height: 20vmin;
  
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: normal;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.4);

  color: ${props => props.color};

  ${props => (props.card.faceUp ? tw`bg-orange-400` : tw`bg-blue-400`)}
  
  background-image: url(${props =>
    props.card.faceUp ? props.card.frontImage : props.card.backImage});

  ${tw`opacity-75 hover:opacity-100`}

  ${tw`rounded-lg cursor-pointer`}
`;

export default StyledCard;
