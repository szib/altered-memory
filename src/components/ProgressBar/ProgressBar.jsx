import React, { useState, useEffect } from "react";

import useInterval from "../../hooks/useInterval";
import { Wrapper, Bar } from "./ProgressBarComponents";

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
