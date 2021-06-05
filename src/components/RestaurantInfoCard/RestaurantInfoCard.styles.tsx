import { Text, View } from "react-native";

/**
 * Imports assets
 */
import Open from "./open.svg";

/**
 * Imports MUI Components
 */
import { Card } from "react-native-paper";

/**
 * Imports styling
 */
import { styled } from "../../themes/theme";

/**
 * Styles the open image
 */
export const OpenImage = styled(Open)`
  ${(props) => {
    const { theme } = props;

    return `
  position: absolute;
  right: 5px;
  top: -15px;
`;
  }}
`;

/**
 * Styles the title
 */
export const StatusContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;
  }}
`;

/**
 * Styles the info container
 */
export const InfoContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
color: ${theme.palette.text.primary};
font-size: ${theme.fontSizes.body};
font-family: ${theme.fonts.body}
`;
  }}
`;

/**
 * Styles the warning text
 */
export const WarningText = styled(Text)`
  ${(props) => {
    const { theme } = props;

    return `
color: ${theme.palette.ui.error};
font-size: ${theme.fontSizes.body};
font-family: ${theme.fonts.headingBold};
`;
  }}
`;

/**
 * Styles the restaurant card
 */
export const RestaurantCard = styled(Card)`
  ${(props) => {
    const { theme } = props;

    return `
   background-color: ${theme.palette.common.white};
   padding: ${theme.space[3]};
 `;
  }}
`;

/**
 * Styles the restaurant cover
 */
export const RestaurantCover = styled(Card.Cover)`
  ${(props) => {
    const { theme } = props;

    return `
     background-color: ${theme.palette.common.white};
     padding-bottom: ${theme.space[3]};
   `;
  }}
`;
