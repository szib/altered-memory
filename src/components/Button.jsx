import styled from "styled-components";
import tw from "tailwind.macro";

const StyledButton = styled.button`
  ${tw`
    cursor-pointer
    font-display
    text-xl
    
    bg-transparent
    mx-auto
    
    border
    rounded 
    hover:border-transparent 
    
    px-8 py-4
    m-2
    
    hover:opacity-75
    outline-none
  `}
  transition: all 200ms ease-in;

  ${props => props.full && tw`w-full`}
  ${props => props.theme.button}
`;

export default StyledButton;
