import { View } from "react-native";

/**
 * Imports styling
 */
import { styled } from "../../themes/theme";

/**
 * Styles the rating container
 */
export const RatingContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
  flex-direction: row;
  paddingTop: ${theme.space[1]};
  paddingBottom: ${theme.space[1]};
`;
  }}
`;
