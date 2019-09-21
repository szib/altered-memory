import React from "react";

import tw from "tailwind.macro";

const TransitionWrapper = tw.div`absolute w-full`;

const withTransition = WrappedComponent => {
  const Component = (...props) => (
    <TransitionWrapper>
      <WrappedComponent {...props} />
    </TransitionWrapper>
  );
  Component.displayName = WrappedComponent.displayName;

  return Component;
};

export default withTransition;
