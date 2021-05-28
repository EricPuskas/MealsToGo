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
 * Displays the component
 */
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
