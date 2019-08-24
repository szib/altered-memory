import tw from 'tailwind.macro';

export const Screen = tw.div`
  bg-dark-paper 
  w-screen min-h-screen 
  flex justify-center items-center
  `;

export const Container = tw.div`
  m-20 
  flex flex-col justify-center items-center
`;

export const Title = tw.div`
  text-dark-pen 
  font-display
  text-6xl 
  text-center
  `;

export const Text = tw.div`
  text-dark-pen 
  font-body
  text-2xl 
  text-center
  my-2
`;

export const SmallText = tw(Text)`
  text-sm
  uppercase
`;

export const A = tw.a`text-dark-pen`;

export const Panel = tw.div`
  p-8

  bg-transparent
  text-dark-pen

  border-solid
  border
  border-dark-pen
  rounded
`;
