import React from "react";

/**
 * Imports Components
 */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/components/RestaurantsScreen";

/**
 * Imports the Theme Provider
 */
import { ThemeProvider } from "styled-components/native";

/**
 * Imports the theme
 */
import { theme } from "./src/themes/theme";

/**
 * Imports fonts
 */
import {
  useFonts as useRobotoFont,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

/**
 * Displays the component
 */
const App: React.FC = () => {
  const [robotoLoaded] = useRobotoFont({ Roboto_400Regular });
  const [latoLoaded] = useLatoFont({ Lato_400Regular, Lato_700Bold });

  if (!robotoLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
