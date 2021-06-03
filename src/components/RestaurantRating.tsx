import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

/**
 * Imports assets
 */
import star from "../../assets/star";

/**
 * Imports styling
 */
import { styled } from "../themes/theme";

/**
 * Defines the Restaurant Info Card Props Interface
 */
export interface RestaurantRatingProps {
  rating: number;
}

/**
 * Styles the rating container
 */
const RatingContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
   flex-direction: row;
   paddingTop: ${theme.space[1]};
   paddingBottom: ${theme.space[1]};
`;
  }}
`;

/**
 * Displays the component
 */
export const RestaurantRating: React.FC<RestaurantRatingProps> = (props) => {
  const { rating } = props;

  const ratingCount = Array.from(new Array(Math.floor(rating)));

  return (
    <RatingContainer>
      {ratingCount.map((rating, index) => {
        return (
          <SvgXml
            key={`${rating}_${index}`}
            xml={star}
            width={20}
            height={20}
          />
        );
      })}
    </RatingContainer>
  );
};
