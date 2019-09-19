/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

import tw from "tailwind.macro";

import Button from "../components/Button";

import * as TW from "../components/TW";
import withTransition from "../HOC/withTransition";

const LandingPage = () => {
  return (
    <TW.Screen>
      <TW.Container>
        <TW.Panel>
          <TW.Title big>Altered Memory</TW.Title>
          <TW.Text>It's not rocket science.</TW.Text>
          <TW.Text>Just memorize them.</TW.Text>
          <TW.Text>Then find them.</TW.Text>
          <TW.Text>Oh. One more thing...</TW.Text>
          <TW.Text style={tw`mb-8`}>
            You really do not want to make mistakes...
          </TW.Text>
          <Link to="/settings" as={Button}>
            <Button full>Start game</Button>
          </Link>
          <Link to="/about" as={Button}>
            <Button full>About</Button>
          </Link>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default withTransition(LandingPage);
