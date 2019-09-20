import { useSelector } from "react-redux";

import tw from "tailwind.macro";

const useTheme = () => {
  const settings = useSelector(state => state.themes);
  const selectedTheme = settings.selectedTheme;

  switch (selectedTheme) {
    case "dark":
      return {
        bg: tw`bg-dark-paper`,
        bg2: tw`bg-dark-paper2`,
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
        bg2: tw`bg-ocean-paper2`,
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
        bg2: tw`bg-pastel-paper2`,
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

    case "fire":
      return {
        bg: tw`bg-fire-paper`,
        bg2: tw`bg-fire-paper2`,
        text: tw`text-fire-pen`,
        border: tw`border-fire-pen`,
        faceUpCard: tw`bg-fire-faceup`,
        faceDownCard: tw`bg-fire-facedown`,
        button: tw`text-fire-pen border-fire-pen hover:bg-fire-pen hover:text-fire-paper`,
        settingsbutton: tw`text-fire-pen border-fire-pen`,
        infopanel: tw`bg-fire-paper2 text-fire-pen`,
        progressbar: tw`bg-fire-pen`,
        progressbarwrapper: tw`bg-fire-paper text-fire-pen border-fire-pen`
      };

    case "nature":
      return {
        bg: tw`bg-nature-paper`,
        bg2: tw`bg-nature-paper2`,
        text: tw`text-nature-pen`,
        border: tw`border-nature-pen`,
        faceUpCard: tw`bg-nature-faceup`,
        faceDownCard: tw`bg-nature-facedown`,
        button: tw`text-nature-pen border-nature-pen hover:bg-nature-pen hover:text-nature-paper`,
        settingsbutton: tw`text-nature-pen border-nature-pen`,
        infopanel: tw`bg-nature-paper2 text-nature-pen`,
        progressbar: tw`bg-nature-pen`,
        progressbarwrapper: tw`bg-nature-paper text-nature-pen border-nature-pen`
      };

    default:
      break;
  }
};

export default useTheme;
