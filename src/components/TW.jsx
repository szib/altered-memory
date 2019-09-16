import styled from "styled-components";
import tw from "tailwind.macro";

export const Screen = styled.div`
  ${tw`
    w-screen min-h-screen 
    flex justify-center items-center
  `}
  ${props => props.theme.bg}
`;

export const Container = styled.div`
  ${tw`
    m-20 
    flex flex-col justify-center items-center
  `}
`;

export const Title = styled.div`
  ${tw`
    font-display
    text-6xl 
    text-center
  `}
  ${props => props.theme.text}
`;

export const Text = styled.div`
  ${tw`
    font-body
    text-2xl 
    text-center
    my-2
  `}
  ${props => props.theme.text}
`;

export const SmallText = tw(Text)`
  text-sm
  uppercase
`;

export const A = styled.a`
  ${props => props.theme.text}
`;

export const Panel = styled.div`
  ${tw`
    p-8
    bg-transparent
    border-solid
    border
    rounded
  `}
  ${props => props.theme.text}
  ${props => props.theme.border}
`;
