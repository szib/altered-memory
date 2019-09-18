import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

const ItemWrapper = styled.div`
  ${tw`
    font-body
    text-xl 
    my-4
    flex justify-around
  `}
  ${props => props.theme.text}
`;

const StatItem = ({ title, value }) => {
  return (
    <ItemWrapper>
      <div style={tw`w-1/2 text-right mr-6`}>{title}</div>
      <div style={tw`w-1/2 text-right ml-6 pr-40`}>{value}</div>
    </ItemWrapper>
  );
};

export default StatItem;
