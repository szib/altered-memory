import tw from 'tailwind.macro';

const StyledButton = tw.button`
  font-display
  
  text-dark-pen 
  bg-transparent
  w-full
  mx-auto
  
  border
  rounded 
  hover:border-transparent 
  border-dark-pen
  
  px-8 py-4
  px-8 py-4
  my-2

  hover:bg-dark-pen
  hover:text-dark-paper
  hover:opacity-75

  outline-none
`;

export default StyledButton;
