import React from 'react';

import tw from 'tailwind.macro';
import * as TW from '../TW';

const OptionsDiv = tw.div`
  flex justify-center items-center
`;

const Options = ({ title, children }) => {
  return (
    <>
      <TW.Text>{title}</TW.Text>
      <OptionsDiv>{children}</OptionsDiv>
    </>
  );
};

export default Options;
