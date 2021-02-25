import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Headline } from "react-native-paper";
import ContentTile from "../components/ContentTile";

export default function ContentScreen() {
  var headlines = [];

  // Creating key values based on index for mock content
  for (let i = 0; i < 10; i++) {
    headlines.push(<ContentTile key={i} value={i + 1}></ContentTile>);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headline style={styles.heading}>Headlines</Headline>
        {headlines}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  heading: {
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});
