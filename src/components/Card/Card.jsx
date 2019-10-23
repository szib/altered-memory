import React, { useContext } from "react";
import { useSpring } from "react-spring";
import { ThemeContext } from "styled-components";

import { CardWrapper, CardFace } from "./CardComponents";

const trans = (y, s) => `perspective(600px) rotateY(${y}deg) scale(${s})`;

const Card = props => {
  const { card, clickOnCardHandler, cardSize, style } = props;

  const theme = useContext(ThemeContext);

  const clickHandler = () => {
    if (card.selectable && !card.selected && !card.faceUp) {
      clickOnCardHandler(card.id);
    }
  };

  const springConfig = faceUp => ({
    ...(faceUp ? theme.faceUpCard : theme.faceDownCard),
    opacity: faceUp ? 1 : 0,
    ys: [faceUp ? 180 : 0, 0.98],
    config: { mass: 2, tension: 500, friction: 42 }
  });

  const [springProps, set] = useSpring(() => springConfig(card.faceUp));

  set(springConfig(card.faceUp));
  const { ys, opacity, backgroundColor } = springProps;

  return (
    <CardWrapper onClick={clickHandler} cardSize={cardSize} style={style}>
      <CardFace
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform: ys.interpolate(trans),
          backgroundColor
        }}
        image={card.backImage}
      />
      <CardFace
        style={{
          opacity,
          transform: ys.interpolate(trans),
          backgroundColor
        }}
        image={card.frontImage}
        onMouseEnter={() => set({ ys: [card.faceUp ? 180 : 0, 1] })}
        onMouseLeave={() => set({ ys: [card.faceUp ? 180 : 0, 0.98] })}
      />
    </CardWrapper>
  );
};

export default Card;
