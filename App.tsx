import React, { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const isAndroid = Platform.OS === "android";
  const statusHeight = StatusBar.currentHeight;
  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 1, marginTop: isAndroid ? statusHeight : 0 }}
      >
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
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
