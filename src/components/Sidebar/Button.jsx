import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`w-full bg-transparent border-none`}
  ${tw`opacity-25 hover:opacity-100`}
  ${tw`text-gray-100`}
  outline: none;

  @media screen and (orientation:portrait) {
  ${tw`text-xl p-2`}
  }
  @media screen and (orientation: landscape) {
  ${tw`text-2xl p-4`}
  }
`;

const Button = ({ children, clickHandler }) => (
  <StyledButton type="button" onClick={clickHandler}>
    {children}
  </StyledButton>
);

export default Button;
