import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';

import Button from './components/Button';

const LandingPage = () => {
  return (
    <div
      id="screen"
      style={tw`bg-color1 w-screen h-screen flex justify-center items-center`}
    >
      <div
        id="container"
        style={tw`h-full w-full p-10 flex flex-col justify-center items-center`}
      >
        <div style={tw`text-color5 text-5xl font-display`}>Altered Memory</div>
        <Link to="/game" as={Button}>
          <Button>New game</Button>
        </Link>
        <Link to="/help">
          <Button>Help</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
