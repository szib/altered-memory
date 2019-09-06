import React from "react";

import tw from "tailwind.macro";

const TransitionWrapper = tw.div`absolute w-full`;

const withTransition = WrappedComponent => {
  return (...props) => (
    <TransitionWrapper>
      <WrappedComponent {...props} />
    </TransitionWrapper>
  );
};

export default withTransition;
