import styled from "styled-components";
import tw from "tailwind.macro";

const SettingsButton = styled.div`
  ${tw`
    cursor-pointer
    m-2

    font-display
    text-md
    bg-transparent
    border-none
    
    outline-none
    
    border-transparent
    border-solid
    border-0
    border-b-2

    opacity-75
    hover:opacity-100

  `}
  ${props => (props.active ? tw`border-solid opacity-100` : tw`border-none`)}
  ${props => props.theme.settingsbutton}
`;

export default SettingsButton;
