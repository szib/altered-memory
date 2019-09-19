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
    m-10 
    flex flex-col justify-center items-center
    max-w-4xl
  `}
`;

export const Title = styled.div`
  ${tw`
    font-display
    text-center
  `}
  ${props => props.uppercase && tw`uppercase`}
  ${props => (props.big ? tw`text-6xl` : tw`text-4xl`)}
  ${props => props.theme.text}
`;

export const Text = styled.div`
  ${tw`
    font-body
    text-xl 
    text-center
    my-2
  `}
  ${props => props.small && tw`text-sm`}
  ${props => props.uppercase && tw`uppercase`}
  ${props => props.theme.text}
`;

export const A = styled.a`
  ${props => props.theme.text}
`;

export const Panel = styled.div`
  ${tw`
    p-8
    border-solid
    border
    rounded
  `}
  ${props => props.theme.text}
  ${props => props.theme.bg2}
  ${props => props.theme.border}
`;
