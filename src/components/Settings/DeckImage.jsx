import styled from "styled-components";
import tw from "tailwind.macro";

export const DeckImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: normal;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  background-image: url(${props => props.image});

  ${tw`
    m-2
    rounded-lg 
    w-10
    h-10
  `}
  ${props => props.theme.faceUpCard}
`;
