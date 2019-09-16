/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { ThemeContext } from "styled-components";
import tw from "tailwind.macro";

import Button from "../components/Button";
import * as TW from "../components/TW";
import withTransition from "../HOC/withTransition";
import { Github, LinkedIn } from "../components/Icons";

const AboutPage = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <TW.Screen>
      <Helmet title="About" />
      <TW.Container>
        <TW.Panel>
          <TW.Title>Altered Memory</TW.Title>
          <TW.Text>
            This game is a remake of my Javascript project at Flatiron School.
            During the project week we did not have time to finish it as we
            planned, so after graduation I rewrote it - almost - from scratch.
            This time in React instead of vanila Javascript, using react-spring
            as animation library and Xstate for managing game logic.
          </TW.Text>
          <TW.Text>
            The code is not public at the moment, but I might make it open
            source in the future. For now you can have a look on the code of the
            &nbsp;
            <TW.A href="http://github.com/szib/altered-memory-frontend">
              original game.
            </TW.A>
          </TW.Text>
          <TW.Title style={tw`mt-10`}>Ivan Szebenszki</TW.Title>
          <TW.Text>
            London-based Full Stack Developer, Flatiron School Graduate
          </TW.Text>
          <TW.Text>
            <Github />
            <LinkedIn />
          </TW.Text>
          <TW.Text style={tw`mt-10`}>
            <Link to="/" as={Button}>
              <Button>Back</Button>
            </Link>
          </TW.Text>
          <TW.SmallText>
            Music by{" "}
            <a
              href="https://www.youtube.com/user/myuuji"
              target="_blank"
              rel="noopener noreferrer"
              style={themeContext.text}
            >
              Nicolas Gasparini (Myuu)
            </a>
          </TW.SmallText>
        </TW.Panel>
      </TW.Container>
    </TW.Screen>
  );
};

export default withTransition(AboutPage);
