import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const DeckImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: normal;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  background-image: url(${props => props.image});

  ${tw`
    m-2
    rounded-lg 
    bg-dark-card-front
    w-10
    h-10
  `}
`;

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