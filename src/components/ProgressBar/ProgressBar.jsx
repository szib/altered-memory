import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useInterval from '../../hooks/useInterval';

const Wrapper = styled.div`
  height: 0.5em;
  width: 48%;
  ${tw`
    mt-6
    mx-auto

    bg-dark-paper  
    text-dark-pen

    border
    border-solid
    border-dark-pen
    rounded
  `}
`;

const Bar = styled.div`
  width: ${props => props.percentage}%;
  transition: width 1s linear;
  ${tw`
    h-full
    bg-dark-pen
  `}
`;

const ProgressBar = ({ seconds = 5, onCompleted }) => {
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
    <Wrapper>
      <Bar percentage={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;
