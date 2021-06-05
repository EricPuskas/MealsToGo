import baseStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";

export const theme = {
  palette: {
    brand: {
      primary: "#2182BD",
      secondary: "#5282BD",
      muted: "#C6DAF7"
    },
    ui: {
      primary: "#262626",
      secondary: "#757575",
      tertiary: "#F1F1F1",
      quaternary: "#FFFFFF",
      disabled: "#DEDEDE",
      error: "#D0421B",
      success: "#138000"
    },
    bg: {
      primary: "#FFFFFF",
      secondary: "#F1F1F1"
    },
    border: {
      primary: "#f8f8f8"
    },
    text: {
      primary: "#262626",
      secondary: "#757575",
      disabled: "#9C9C9C",
      inverse: "#FFFFFF",
      error: "#D0421B",
      success: "#138000"
    },
    common: {
      white: "#fff",
      black: "#000"
    }
  },
  fonts: {
    body: "Roboto_400Regular",
    heading: "Lato_400Regular",
    headingBold: "Lato_700Bold",
    monospace: "Roboto_400Regular"
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: {
    caption: "14px",
    button: "14px",
    body: "16px",
    subtitle: "18px",
    title: "20px",
    h5: "24px",
    h4: "34px",
    h3: "45px",
    h2: "56px",
    h1: "112px"
  },
  sizes: ["8px", "16px", "32px", "64px", "128px"],
  lineHeights: {
    title: "28px",
    copy: "20px"
  },
  space: ["0px", "4px", "8px", "16px", "32px", "64px"]
};

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const styled = baseStyled as ThemedStyledInterface<Theme>;
