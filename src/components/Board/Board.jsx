import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Board = ({ machine, className }) => {
  const { context, send } = machine;
  const { cards } = context;

  const clickOnCardHandler = id => {
    send("CLICK_ON_CARD", { cardId: id });
  };

  const cardElements = cards.map(card => (
    <Card
      key={card.id}
      card={card}
      clickOnCardHandler={() => clickOnCardHandler(card.id)}
    />
  ));

  return <div className={className}>{cardElements}</div>;
};

const StyledBoard = styled(Board)`
  box-sizing: border-box;
  ${tw`bg-gray-800 w-full flex justify-center align-middle `}
  ${tw`w-full h-full p-16`}
  grid-area: board;

  display: grid;
  grid-template-columns: repeat(4, 20vmin);
  grid-template-rows: repeat(4, 20vmin);
  grid-gap: 2vh 2vh;
`;

export default StyledBoard;
