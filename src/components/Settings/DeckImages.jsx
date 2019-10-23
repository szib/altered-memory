import React from "react";

import tw from "tailwind.macro";
import { DeckImage } from "./DeckImage";

const DeckImages = ({ images }) => {
  return (
    <div style={tw`flex justify-center items-center`}>
      {Object.values(images).map(img => (
        <DeckImage key={img} image={img} />
      ))}
    </div>
  );
};

export default DeckImages;
