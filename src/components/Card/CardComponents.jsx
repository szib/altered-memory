import styled from "styled-components";
import tw from "tailwind.macro";

import { animated } from "react-spring";

export const CardWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;

  width: ${props => props.cardSize * 0.95}px;
  height: ${props => props.cardSize * 0.95}px;
`;

export const CardFace = animated(styled.div`
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
