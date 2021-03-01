import React, { useState } from "react";
import {
  Headline,
  Checkbox,
  Button,
  Switch,
  Text,
  Divider,
  Caption,
} from "react-native-paper";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function SettingsScreen() {
  const [checked, setChecked] = React.useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <Headline style={styles.title}>Settings</Headline>
      <View style={styles.subContainer}>
        <View style={styles.list}>
          <View>
            <Caption>OVERLINE</Caption>
            <Text>Checkbox 1</Text>
          </View>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Divider />
        <View style={styles.list}>
          <View>
            <Caption>OVERLINE</Caption>
            <Text>Toggle 1</Text>
          </View>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>

        <Divider />
      </View>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => alert("Save button pressed")}
      >
        Save
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
    marginHorizontal: 10,
  },
  subContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 30,
    marginBottom: 5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
  button: {
    alignSelf: "center",
    marginVertical: 30,
  },
});
