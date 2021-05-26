import React, { Fragment, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  const isAndroid = Platform.OS === "android";
  const statusHeight = StatusBar.currentHeight;

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 1, marginTop: isAndroid ? statusHeight : 0 }}
      >
        <View
          style={{
            padding: 16,
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderBottomColor: "#f8f8f8",
            borderTopColor: "#f8f8f8",
          }}
        >
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={onChangeSearch}
          />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text> List </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
