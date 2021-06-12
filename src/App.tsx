import React from "react";
import { Text, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

/**
 * Imports Components
 */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./components/RestaurantsScreen";
import { SafeArea } from "./components/SafeArea";

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

import { RestaurantsContextProvider } from "./services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const Settings = () => {
  /**
   * Defines the isAndroid flag
   */
  const isAndroid = Platform.OS === "android";

  return (
    <SafeArea isAndroid={isAndroid}>
      <Text> Settings </Text>
    </SafeArea>
  );
};

const Map = () => {
  /**
   * Defines the isAndroid flag
   */
  const isAndroid = Platform.OS === "android";

  return (
    <SafeArea isAndroid={isAndroid}>
      <Text> Map </Text>
    </SafeArea>
  );
};

const TAB_ICON: { [key: string]: string } = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

interface ScreenOptionsProps {
  route: {
    name: string;
  };
}

interface TabBarIconFn {
  size: number;
  color: string;
}

const screenOptions = (props: ScreenOptionsProps) => {
  const { route } = props;

  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: (props: TabBarIconFn) => {
      const { size, color } = props;

      // @ts-ignore
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

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
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>

      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
