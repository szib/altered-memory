import React from "react";

import Sound from "react-sound";
import musicFile from "../assets/sounds/music.mp3";

const Music = ({ playing }) => {
  const playStatus = playing ? Sound.status.PLAYING : Sound.status.PAUSED;
  return (
    <Sound
      url={musicFile}
      playStatus={playStatus}
      autoLoad
      loop
      volume={10}
      onError={({ errorCode, description }) =>
        console.log(`${errorCode}: ${description}`)
      }
    />
  );
};

export default Music;
