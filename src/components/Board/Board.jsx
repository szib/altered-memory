import React, { useRef } from "react";

import { useMeasure } from "@softbind/react-hooks";
import { useTransition, animated } from "react-spring";

import ProgressBar from "../ProgressBar/ProgressBar";
import BoardWrapper from "./BoardWrapper";

import Card from "./Card";

const AnimatedCard = animated(Card);

const getSeconds = diff => {
  if (diff === "easy") return 8;
  if (diff === "hard") return 4;
  return 6;
};

const Board = ({ machine, clickOnCardHandler, className }) => {
  const { context } = machine;
  const { cards, difficulty } = context;

  const showProgressBar = machine.state.value.running === "showCards";
  const seconds = getSeconds(difficulty);

  const boardEl = useRef(null);
  const measure = useMeasure(boardEl, "bounds");
  const { bounds } = measure;
  const boardSize = bounds && Math.min(bounds.width, bounds.height) * 0.75;
  const cardSize = Math.floor(boardSize / 4);
  const offsetX = bounds && (bounds.width - boardSize) / 2;
  const offsetY = bounds && (bounds.height - boardSize) / 2;

  const transitions = useTransition(cards, card => card.id, {
    from: ({ position }) => ({
      position
    }),
    update: ({ position }) => ({
      position
    }),
    leave: { height: 0 },
    config: { mass: 12, tension: 300, friction: 70 }
  });

  const onCompleteHandler = () => {
    machine.send("TIMER_DONE");
  };

  const trans = (x, y) =>
    `translate3d(${x * cardSize + offsetX}px,${y * cardSize + offsetY}px,0)`;

  const cardElements = transitions.map(
    ({ item, props: { position, ...rest }, key }) => {
      return (
        <AnimatedCard
          key={key}
          style={{
            transform: position.interpolate((x, y) => trans(x, y)),
            zIndex: item.isMoving ? 1000 : 10,
            ...rest
          }}
          card={item}
          cardSize={cardSize}
          clickOnCardHandler={clickOnCardHandler}
        />
      );
    }
  );

  return (
    <BoardWrapper ref={boardEl} className={className}>
      {showProgressBar && (
        <ProgressBar seconds={seconds} onCompleted={onCompleteHandler} />
      )}
      {cardElements}
    </BoardWrapper>
  );
};
export default Board;
