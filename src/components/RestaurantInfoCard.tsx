import React from "react";
import { Text } from "react-native";

/**
 * Imports MUI Components
 */
import { Card } from "react-native-paper";

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
 * Styles the title
 */
const Title = styled(Text)`
  ${(props) => {
    const { theme } = props;

    return `
  color: ${theme.palette.text.primary};
  font-size: ${theme.fontSizes.body};
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
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
