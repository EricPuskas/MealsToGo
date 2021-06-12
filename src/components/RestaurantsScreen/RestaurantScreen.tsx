import React, { useState, useContext } from "react";
import { Platform, FlatList, ListRenderItem, View } from "react-native";

/**
 * Imports MUI Components
 */
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

/**
 * Imports Components
 */
import {
  RestaurantInfoCard,
  RestaurantInfoCardProps,
} from "../RestaurantInfoCard";
import { SafeArea } from "../SafeArea";

/**
 * Imports styled components
 */
import {
  ScreenContainer,
  SearchContainer,
  CardContainer,
} from "./RestaurantScreen.styles";

/**
 * Imports mock data
 */
// import { restaurants } from "./RestaurantScreen.mock";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

/**
 * Defines the focus history item type
 */
export type FocusHistoryItem = { status: number; subject: string; key: string };

/**
 * Displays the component
 */
export const RestaurantsScreen: React.FC = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

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
    <SafeArea isAndroid={isAndroid}>
      <View style={{ position: "absolute", top: "50%", left: "50%" }}>
        <ActivityIndicator
          size={50}
          style={{ marginLeft: -25 }}
          animating={true}
          color={Colors.blue300}
        />
      </View>
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
    </SafeArea>
  );
};
