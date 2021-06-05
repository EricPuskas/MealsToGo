import React, { useState } from "react";
import { Platform, FlatList, ListRenderItem } from "react-native";

/**
 * Imports MUI Components
 */
import { Searchbar } from "react-native-paper";

/**
 * Imports Components
 */
import {
  RestaurantInfoCard,
  RestaurantInfoCardProps
} from "../RestaurantInfoCard";

/**
 * Imports styled components
 */
import {
  ScreenContainer,
  SearchContainer,
  CardContainer
} from "./RestaurantScreen.styles";

/**
 * Imports mock data
 */
import { restaurants } from "./RestaurantScreen.mock";

/**
 * Defines the focus history item type
 */
export type FocusHistoryItem = { status: number; subject: string; key: string };

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

  const renderItem: ListRenderItem<RestaurantInfoCardProps> = (props) => {
    const { item, index } = props;

    return (
      <CardContainer key={index}>
        <RestaurantInfoCard {...item} />
      </CardContainer>
    );
  };

  return (
    <ScreenContainer isAndroid={isAndroid}>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
      </SearchContainer>

      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </ScreenContainer>
  );
};
