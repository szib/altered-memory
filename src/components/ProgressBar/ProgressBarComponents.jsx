import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  height: 0.5em;
  width: ${props => props.width * 0.85}px;

  position: absolute;
  top: ${props => props.offsetY / 4}px;

  ${tw`
    border
    border-solid
    rounded
  `}
  ${props => props.theme.progressbarwrapper}
`;

export const Bar = styled.div`
  width: ${props => props.percentage}%;
  transition: width 1s linear;
  ${tw`h-full`}
  ${props => props.theme.progressbar}
`;
