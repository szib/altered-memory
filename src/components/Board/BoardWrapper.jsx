import styled from "styled-components";
import tw from "tailwind.macro";

const BoardWrapper = styled.div`
  box-sizing: border-box;
  ${tw`flex justify-center align-middle `}
  ${tw`w-full h-full p-16`}
  grid-area: board;
  position: relative;
  ${props => props.theme.bg}
`;

export default BoardWrapper;
