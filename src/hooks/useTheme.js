import { useSelector } from "react-redux";

import tw from "tailwind.macro";

const useTheme = () => {
  const settings = useSelector(state => state.themes);
  const selectedTheme = settings.selectedTheme;

  switch (selectedTheme) {
    case "dark":
      return {
        bg: tw`bg-dark-paper`,
        text: tw`text-dark-pen`,
        border: tw`border-dark-pen`,
        faceUpCard: tw`bg-dark-faceup`,
        faceDownCard: tw`bg-dark-facedown`,
        button: tw`text-dark-pen border-dark-pen hover:bg-dark-pen hover:text-dark-paper`,
        settingsbutton: tw`text-dark-pen border-dark-pen`,
        infopanel: tw`bg-dark-paper2 text-dark-pen`,
        progressbar: tw`bg-dark-pen`,
        progressbarwrapper: tw`bg-dark-paper text-dark-pen border-dark-pen`
      };

    case "ocean":
      return {
        bg: tw`bg-ocean-paper`,
        text: tw`text-ocean-pen`,
        border: tw`border-ocean-pen`,
        faceUpCard: tw`bg-ocean-faceup`,
        faceDownCard: tw`bg-ocean-facedown`,
        button: tw`text-ocean-pen border-ocean-pen hover:bg-ocean-pen hover:text-ocean-paper`,
        settingsbutton: tw`text-ocean-pen border-ocean-pen`,
        infopanel: tw`bg-ocean-paper2 text-ocean-pen`,
        progressbar: tw`bg-ocean-pen`,
        progressbarwrapper: tw`bg-ocean-paper text-ocean-pen border-ocean-pen`
      };

    case "pastel":
      return {
        bg: tw`bg-pastel-paper`,
        text: tw`text-pastel-pen`,
        border: tw`border-pastel-pen`,
        faceUpCard: tw`bg-pastel-faceup`,
        faceDownCard: tw`bg-pastel-facedown`,
        button: tw`text-pastel-pen border-pastel-pen hover:bg-pastel-pen hover:text-pastel-paper`,
        settingsbutton: tw`text-pastel-pen border-pastel-pen`,
        infopanel: tw`bg-pastel-paper2 text-pastel-pen`,
        progressbar: tw`bg-pastel-pen`,
        progressbarwrapper: tw`bg-pastel-paper text-pastel-pen border-pastel-pen`
      };

    default:
      break;
  }
};

export default useTheme;
