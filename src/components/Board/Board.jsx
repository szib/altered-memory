import React from "react";

import { useTransition, animated } from "react-spring";

import styled from "styled-components";

import Card from "./Card";
const AnimatedCard = animated(Card);

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

  const transitions = useTransition(cards, card => card.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }
  });

  const clickOnCardHandler = id => {
    send("CLICK_ON_CARD", { cardId: id });
  };

  const cardElements = transitions.map(trans => {
    const { item, key, props } = trans;
    return (
      <AnimatedCard
        key={key}
        style={props}
        card={item}
        clickOnCardHandler={() => clickOnCardHandler(item.id)}
      ></AnimatedCard>
    );
  });

  return <BoardDiv className={className}>{cardElements}</BoardDiv>;
};

export default Board;
