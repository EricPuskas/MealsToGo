import { StatusBar, SafeAreaView } from "react-native";

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
export const SafeArea = styled(SafeAreaView)<IScreenContainer>`
  flex: 1;
  margin-top: ${(props) => (props.isAndroid ? StatusBar.currentHeight : 0)}px;
`;
