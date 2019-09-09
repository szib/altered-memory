import styled from "styled-components";
import tw from "tailwind.macro";

const SettingsButton = styled.div`
  ${tw`
    cursor-pointer
    m-2

    font-display
    text-xl
    text-dark-pen 
    bg-transparent
    border-none
    
    outline-none
    
    border-transparent
    border-solid
    border-0
    border-b-2

    border-dark-pen
    opacity-75
    hover:opacity-100

  `}
  ${props => (props.active ? tw`border-solid opacity-100` : tw`border-none`)}
`;

export default SettingsButton;
