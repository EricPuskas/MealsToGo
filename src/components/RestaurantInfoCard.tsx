import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

/**
 * Imports MUI Components
 */
import { Card } from "react-native-paper";

/**
 * Imports Components
 */
import { RestaurantRating } from "./RestaurantRating";

/**
 * Imports assets
 */
import open from "../../assets/open";

/**
 * Imports styling
 */
import { styled } from "../themes/theme";

/**
 * Defines the Restaurant Info Card Props Interface
 */
export interface RestaurantInfoCardProps {
  name: string;
  icon: string;
  photos: any[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

/**
 * Styles the open image
 */
const OpenImage = styled(SvgXml)`
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
const StatusContainer = styled(View)`
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
const InfoContainer = styled(View)`
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
 * Styles the title
 */
const WarningText = styled(Text)`
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
 * Styles the title
 */
const Title = styled(Text)`
  ${(props) => {
    const { theme } = props;

    return `
  color: ${theme.palette.text.primary};
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.headingBold};
  padding-bottom: ${theme.space[1]};
`;
  }}
`;

/**
 * Styles the address
 */
const Address = styled(Text)`
  ${(props) => {
    const { theme } = props;

    return `
 color: ${theme.palette.text.primary};
 font-size: ${theme.fontSizes.caption};
 font-family: ${theme.fonts.headingBold}
`;
  }}
`;

/**
 * Styles the restaurant card
 */
const RestaurantCard = styled(Card)`
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
const RestaurantCover = styled(Card.Cover)`
  ${(props) => {
    const { theme } = props;

    return `
      background-color: ${theme.palette.common.white};
      padding-bottom: ${theme.space[3]};
    `;
  }}
`;

/**
 * Displays the component
 */
export const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = (
  props
) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = props;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <InfoContainer>
        <Title>{name}</Title>
        <StatusContainer>
          <RestaurantRating rating={rating} />
          {isClosedTemporarily && <WarningText>Closed Temporarily</WarningText>}
          {isOpenNow && <OpenImage xml={open} width={50} height={50} />}
        </StatusContainer>

        <Address>{address}</Address>
      </InfoContainer>
    </RestaurantCard>
  );
};
