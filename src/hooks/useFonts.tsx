/**
 * Imports fonts
 */
import {
  useFonts as useRobotoFont,
  Roboto_400Regular
} from "@expo-google-fonts/roboto";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
  Lato_700Bold
} from "@expo-google-fonts/lato";

/**
 * Defines the main hook
 */
export const useFonts = () => {
  /**
   * Loads the Roboto Font
   */
  const [robotoLoaded] = useRobotoFont({ Roboto_400Regular });

  /**
   *  Loads the Lato Font
   */
  const [latoLoaded] = useLatoFont({ Lato_400Regular, Lato_700Bold });

  return {
    fontsLoaded: robotoLoaded && latoLoaded
  };
};
