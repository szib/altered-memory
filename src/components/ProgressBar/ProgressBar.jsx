import React, { useState, useEffect } from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import useInterval from "../../hooks/useInterval";

const Wrapper = styled.div`
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

const Bar = styled.div`
  width: ${props => props.percentage}%;
  transition: width 1s linear;
  ${tw`h-full`}
  ${props => props.theme.progressbar}
`;

const ProgressBar = ({ seconds = 5, onCompleted, offsetY, width }) => {
  const step = 100 / seconds;

  const [percentage, setPercentage] = useState(100);

  useInterval(() => {
    setPercentage(p => Math.max(0, p - step));
  }, 1000);

  useEffect(() => {
    if (percentage <= 0) {
      setTimeout(() => {
        onCompleted();
      }, 1000);
    }
  }, [percentage, onCompleted]);

  return (
    <Wrapper offsetY={offsetY} width={width}>
      <Bar percentage={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;
