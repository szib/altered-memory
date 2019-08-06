import React, { useCallback } from 'react';

import { useSpring, animated } from 'react-spring';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const CardWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;

  width: ${props => props.cardSize * 0.95}px;
  height: ${props => props.cardSize * 0.95}px;
`;

const CardDiv = animated(styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform-origin: center;

  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: normal;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  background-image: url(${props => props.image});

  ${tw`rounded-lg`}
`);

const trans = (y, s) => `perspective(600px) rotateY(${y}deg) scale(${s})`;

const Card = props => {
  const { card, clickOnCardHandler, cardSize, style } = props;

  const clickHandler = useCallback(() => {
    clickOnCardHandler(card.id);
  }, [card.id, clickOnCardHandler]);

  const springConfig = faceUp =>
    Object.assign({}, faceUp ? tw`bg-color5` : tw`bg-color4`, {
      opacity: faceUp ? 1 : 0,
      ys: [faceUp ? 180 : 0, 0.98],
      config: { mass: 2, tension: 1000, friction: 42 },
    });

  const [springProps, set] = useSpring(() => springConfig(card.faceUp));

  set(springConfig(card.faceUp));
  const { ys, opacity, backgroundColor } = springProps;

  return (
    <CardWrapper onClick={clickHandler} cardSize={cardSize} style={style}>
      <CardDiv
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform: ys.interpolate(trans),
          backgroundColor,
        }}
        image={card.backImage}
      />
      <CardDiv
        style={{
          opacity,
          transform: ys.interpolate(trans),
          backgroundColor,
        }}
        image={card.frontImage}
        onMouseEnter={() => set({ ys: [card.faceUp ? 180 : 0, 1] })}
        onMouseLeave={() => set({ ys: [card.faceUp ? 180 : 0, 0.98] })}
      />
    </CardWrapper>
  );
};

export default Card;
