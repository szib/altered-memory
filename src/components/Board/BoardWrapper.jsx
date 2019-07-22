import styled from 'styled-components';
import tw from 'tailwind.macro';

const BoardWrapper = styled.div`
  box-sizing: border-box;
  ${tw`bg-gray-700 w-full flex justify-center align-middle `}
  ${tw`w-full h-full p-16`}
  grid-area: board;
`;
export default BoardWrapper;
