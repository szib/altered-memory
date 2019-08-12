import tw from 'tailwind.macro';

export const Screen = tw.div`
  bg-color1 
  w-screen min-h-screen 
  flex justify-center items-center
  `;

export const Container = tw.div`
  m-20 
  flex flex-col justify-center items-center
`;

export const Title = tw.div`
  text-color5 
  font-display
  text-6xl 
  text-center
  `;

export const Text = tw.div`
  text-color5 
  font-body
  text-2xl 
  text-center
  my-2
`;

export const SmallText = tw(Text)`
  text-sm
  uppercase
`;

export const A = tw.a`text-color5`;
