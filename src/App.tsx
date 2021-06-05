import React from "react";

/**
 * Imports Components
 */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./components/RestaurantsScreen";

/**
 * Imports the Theme Provider
 */
import { ThemeProvider } from "styled-components/native";

/**
 * Imports hooks
 */
import { useFonts } from "./hooks";

/**
 * Imports the theme
 */
import { theme } from "./themes/theme";

/**
 * Displays the component
 */
const App: React.FC = () => {
  /**
   * Loads the fonts
   */
  const { fontsLoaded } = useFonts();

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
