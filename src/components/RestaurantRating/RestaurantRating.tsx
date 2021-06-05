import React from "react";

/**
 * Imports assets
 */
import Star from "./star.svg";

/**
 * Imports styled components
 */
import { RatingContainer } from "./RestaurantRating.styles";

/**
 * Defines the Restaurant Info Card Props Interface
 */
export interface RestaurantRatingProps {
  rating: number;
}

/**
 * Displays the component
 */
export const RestaurantRating: React.FC<RestaurantRatingProps> = (props) => {
  const { rating } = props;

  const ratingCount = Array.from(new Array(Math.floor(rating)));

  return (
    <RatingContainer>
      {ratingCount.map((index) => {
        return (
          <Star key={`${Math.random()}_${index}`} width={25} height={25} />
        );
      })}
    </RatingContainer>
  );
};
