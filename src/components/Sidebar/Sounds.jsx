import React from "react";

import cardSwapMp3 from "../../assets/sounds/cardSwap.mp3";
import cardSwapWav from "../../assets/sounds/cardSwap.wav";
import cardFlipMp3 from "../../assets/sounds/cardFlip.mp3";
import cardFlipWav from "../../assets/sounds/cardFlip.wav";

const sounds = [
  {
    id: "cardSwap",
    sources: [
      { src: cardSwapMp3, type: "audio/mpeg" },
      { src: cardSwapWav, type: "audio/wav" }
    ]
  },
  {
    id: "cardFlip",
    sources: [
      { src: cardFlipMp3, type: "audio/mpeg" },
      { src: cardFlipWav, type: "audio/wav" }
    ]
  }
];

const Sound = ({ id, sources }) => {
  return (
    <audio id={id}>
      {sources.map(source => (
        <source key={source.type} src={source.src} type={source.type} />
      ))}
    </audio>
  );
};

const Sounds = () => {
  return (
    <>
      {sounds.map(sound => (
        <Sound key={sound.id} id={sound.id} sources={sound.sources} />
      ))}
    </>
  );
};

export default Sounds;
