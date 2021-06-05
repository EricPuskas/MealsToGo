import React from "react";

/**
 * Imports Components
 */
import { RestaurantRating } from "../RestaurantRating";
import { Typography } from "../Typography";

/**
 * Imports styled components
 */
import {
  OpenImage,
  StatusContainer,
  InfoContainer,
  WarningText,
  RestaurantCard,
  RestaurantCover
} from "./RestaurantInfoCard.styles";

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
 * Displays the component
 */
export const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = (
  props
) => {
  const { name, photos, address, isOpenNow, rating, isClosedTemporarily } =
    props;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover
        key={name}
        source={{
          uri: photos[0]
        }}
      />
      <InfoContainer>
        <Typography variant="subtitle">{name}</Typography>
        <StatusContainer>
          <RestaurantRating rating={rating} />
          {isClosedTemporarily && <WarningText>Closed Temporarily</WarningText>}
          {isOpenNow && <OpenImage width={50} height={50} />}
        </StatusContainer>
        <Typography variant="caption" bold>
          {address}
        </Typography>
      </InfoContainer>
    </RestaurantCard>
  );
};
