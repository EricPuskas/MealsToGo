import React, { useState } from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";

/**
 * Imports MUI Components
 */
import { Searchbar } from "react-native-paper";

/**
 * Imports Components
 */
import {
  RestaurantInfoCard,
  RestaurantInfoCardProps as Restaurant,
} from "./RestaurantInfoCard";

/**
 * Imports styling
 */
import styled from "styled-components/native";

/**
 * Defines the Screen Container interface
 */
interface IScreenContainer {
  isAndroid: boolean;
}

/**
 * Defines a mock restaurant
 */
const defaultRestaurant: Restaurant = {
  name: "Some Restaurant",
  icon: "",
  photos: [
    "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM=",
  ],
  address: "Cumbaya Street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false,
};

/**
 * Styles the Screen Container
 */
const ScreenContainer = styled(SafeAreaView)<IScreenContainer>`
  flex: 1;
  margin-top: ${(props) => (props.isAndroid ? StatusBar.currentHeight : 0)}px;
`;

/**
 * Styles the Searchbar Contianer
 */
const SearchContainer = styled(View)`
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
const CardContainer = styled(View)`
  ${(props) => {
    const { theme } = props;

    return `
  flex: 1;
    padding: ${theme.space[3]};
    background-color: ${theme.palette.bg.secondary};
`;
  }}
`;

/**
 * Displays the component
 */
export const RestaurantsScreen: React.FC = () => {
  /**
   * Defines the isAndroid flag
   */
  const isAndroid = Platform.OS === "android";

  /**
   * Init the search input
   */
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Handle search
   */
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <ScreenContainer isAndroid={isAndroid}>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
      </SearchContainer>
      <CardContainer>
        <RestaurantInfoCard {...defaultRestaurant} />
      </CardContainer>
    </ScreenContainer>
  );
};
