import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center self-center`}
  ${tw`text-4xl text-center`}
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
