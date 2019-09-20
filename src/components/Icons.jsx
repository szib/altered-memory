import React from "react";

import tw from "tailwind.macro";

import { InlineIcon } from "@iconify/react";
import volume0Icon from "@iconify/icons-raphael/volume0";
import volume3Icon from "@iconify/icons-raphael/volume3";
import githubaltIcon from "@iconify/icons-raphael/githubalt";
import linkedinIcon from "@iconify/icons-raphael/linkedin";

const style = tw`text-3xl mx-2 cursor-pointer`;

const Icon = ({ url, iconName }) => {
  const clickHandler = () => window.open(url, "_blank");
  let icon;
  switch (iconName) {
    case "github":
      icon = githubaltIcon;
      break;
    case "linkedin":
      icon = linkedinIcon;
      break;
    default:
      break;
  }
  return <InlineIcon icon={icon} onClick={clickHandler} style={style} />;
};

export const Music = ({ clickHandler, enabled }) => {
  const icon = enabled ? volume3Icon : volume0Icon;
  return <InlineIcon icon={icon} onClick={clickHandler} height="4rem" />;
};

export default Icon;
