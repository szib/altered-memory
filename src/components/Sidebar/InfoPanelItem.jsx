import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import tw from "tailwind.macro";

const InfoPanelItem = ({ className, title, value }) => (
  <div className={className}>
    <div>{title}</div>
    <div>{value}</div>
  </div>
);

const StyledInfoPanelItem = styled(InfoPanelItem)`
  ${tw`flex flex-col justify-center self-center`}
  ${tw`text-4xl text-center`}
`;

InfoPanelItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default StyledInfoPanelItem;
