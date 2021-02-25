import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const PlaceholderScreen = function () {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Placeholder Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
