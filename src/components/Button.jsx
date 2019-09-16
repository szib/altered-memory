import styled from "styled-components";
import tw from "tailwind.macro";

const StyledButton = styled.button`
  ${tw`
    cursor-pointer
    font-display
    text-xl
    
    bg-transparent
    w-full
    mx-auto
    
    border
    rounded 
    hover:border-transparent 
    
    px-8 py-4
    my-2
    
    hover:opacity-75
    outline-none
  `}

  ${props => props.theme.button}
`;

export default StyledButton;
