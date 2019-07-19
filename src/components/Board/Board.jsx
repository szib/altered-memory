import React from "react";

import styled from "styled-components";

import Card from "./Card";

const BoardDiv = styled.div`
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(4, 20vmin);
  grid-template-rows: repeat(4, 20vmin);
  grid-gap: 2vh 2vh;
`;

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

  return <BoardDiv className={className}>{cardElements}</BoardDiv>;
};

export default Board;
