import { View, SafeAreaView, StatusBar } from "react-native";

/**
 * Imports styling
 */
import { styled } from "../../themes/theme";

/**
 * Defines the Screen Container interface
 */
interface IScreenContainer {
  isAndroid: boolean;
}

/**
 * Styles the Screen Container
 */
export const ScreenContainer = styled(SafeAreaView)<IScreenContainer>`
  flex: 1;
  margin-top: ${(props) => (props.isAndroid ? StatusBar.currentHeight : 0)}px;
`;

/**
 * Styles the Searchbar Contianer
 */
export const SearchContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
   padding: ${theme.space[3]};
   border-top-width: 2px;
   border-top-color: ${theme.palette.border.primary};
   background-color: ${theme.palette.bg.secondary};
`;
  }}
`;

/**
 * Styles the Card container
 */
export const CardContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
 flex: 1;
   padding: ${theme.space[3]};
   background-color: ${theme.palette.bg.secondary};
`;
  }}
`;
