import React from "react";

import tw from "tailwind.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBan } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const style = tw`text-3xl mx-2 cursor-pointer`;

export const Github = () => {
  const clickHandler = () => window.open("https://github.com/szib", "_blank");
  return (
    <FontAwesomeIcon icon={faGithub} onClick={clickHandler} style={style} />
  );
};

export const LinkedIn = () => {
  const clickHandler = () =>
    window.open("https://www.linkedin.com/in/szib77/", "_blank");
  return (
    <FontAwesomeIcon icon={faLinkedin} onClick={clickHandler} style={style} />
  );
};

export const Music = ({ clickHandler, enabled }) => {
  return (
    <div className="fa-layers fa-4x" onClick={clickHandler}>
      <FontAwesomeIcon fixedWidth icon={faMusic} transform="shrink-6" />
      {!enabled && (
        <FontAwesomeIcon
          fixedWidth
          icon={faBan}
          style={{ color: "red", opacity: 0.7 }}
        />
      )}
    </div>
  );
};
