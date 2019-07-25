import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`w-full bg-transparent border-none`}
  ${tw`opacity-25 hover:opacity-100`}
  ${tw`text-2xl text-gray-100 p-4`}
  outline: none;
`;

const Button = ({ children, clickHandler }) => (
  <StyledButton type="button" onClick={clickHandler}>
    {children}
  </StyledButton>
);

export default Button;
