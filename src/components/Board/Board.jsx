import React, { useRef } from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useMeasure } from '@softbind/react-hooks';
import { useTransition, animated } from 'react-spring';

import Card from './Card';

const AnimatedCard = animated(Card);

const BoardWrapper = styled.div`
  box-sizing: border-box;
  ${tw`w-full`}
  ${tw`bg-dark-paper`}
  ${tw`w-full h-full p-16`}
  grid-area: board;
  position: relative;
`;

const Board = ({ machine, clickOnCardHandler, className }) => {
  const { context } = machine;
  const { cards } = context;

  const boardEl = useRef(null);
  const measure = useMeasure(boardEl, 'bounds');
  const { bounds } = measure;
  const boardSize = bounds && Math.min(bounds.width, bounds.height) * 0.75;
  const cardSize = Math.floor(boardSize / 4);
  const offsetX = bounds && (bounds.width - boardSize) / 2;
  const offsetY = bounds && (bounds.height - boardSize) / 2;

  const transitions = useTransition(cards, card => card.id, {
    from: ({ position }) => ({
      position,
    }),
    update: ({ position }) => ({
      position,
    }),
    leave: { height: 0 },
    config: { mass: 12, tension: 300, friction: 70 },
  });

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
            ...rest,
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
      {cardElements}
    </BoardWrapper>
  );
};
export default Board;
