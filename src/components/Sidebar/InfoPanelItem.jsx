import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center self-center`}
  @media screen and (orientation:portrait) {
    ${tw`text-xl text-center`}
  }
  @media screen and (orientation: landscape) {
    ${tw`text-4xl text-center`}
  }
`;

const InfoPanelItem = ({ title, value }) => (
  <StyledDiv>
    <div>{title}</div>
    <div>{value}</div>
  </StyledDiv>
);

InfoPanelItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default InfoPanelItem;
