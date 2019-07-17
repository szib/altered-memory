import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import tw from "tailwind.macro";

const Button = ({ children, className, clickHandler }) => (
  <button type="button" className={className} onClick={clickHandler}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

const StyledButton = styled(Button)`
  ${tw`w-full bg-transparent border-none`}
  ${tw`opacity-25 hover:opacity-100`}
  ${tw`text-2xl text-gray-100 p-4`}
  outline: none;
`;

export default StyledButton;
