import React from "react";

import { useTransition, animated } from "react-spring";

import styled from "styled-components";
import tw from "tailwind.macro";

import Card from "./Card";
const AnimatedCard = animated(Card);

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
    console.log("trans", trans);
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
