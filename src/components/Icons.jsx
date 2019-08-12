import React from 'react';

import tw from 'tailwind.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const style = tw`text-3xl mx-2`;

export const Github = () => {
  const clickHandler = () => window.open('https://github.com/szib', '_blank');
  return (
    <FontAwesomeIcon icon={faGithub} onClick={clickHandler} style={style} />
  );
};

export const LinkedIn = () => {
  const clickHandler = () =>
    window.open('https://www.linkedin.com/in/szib77/', '_blank');
  return (
    <FontAwesomeIcon icon={faLinkedin} onClick={clickHandler} style={style} />
  );
};
