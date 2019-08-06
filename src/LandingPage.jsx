import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';

import Button from './components/Button';

const Screen = tw.div`
  bg-color1 
  w-screen h-screen 
  flex justify-center items-center
  `;

const Container = tw.div`
  h-full w-full
  m-20 
  flex flex-col justify-center items-center
`;

const Title = tw.div`
  text-color5 
  font-display
  text-6xl 
  text-center
  mb-6
  `;

const Text = tw.div`
  text-color5 
  font-display
  text-2xl 
  text-center
  my-2
`;

const LandingPage = () => {
  return (
    <Screen>
      <Container>
        <Title>Altered Memory</Title>
        <Text>It's not rocket science.</Text>
        <Text>Just memorize them.</Text>
        <Text>Then find them.</Text>
        <Text>Oh. One more thing...</Text>
        <Text>You really do not want to make mistakes...</Text>
        <Text>
          <Link to="/game" as={Button}>
            <Button>--></Button>
          </Link>
        </Text>
      </Container>
    </Screen>
  );
};

export default LandingPage;
