import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Subheading, Headline, Button } from "react-native-paper";
import { signUp } from "../redux/actions";
import { connect } from "react-redux";

const SignUpScreen = function ({ signUp }) {
  // Notice how only email inputs are captured and sent to the store. How would you improve this functionality for your app?
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <Headline style={styles.title}> Enter your details</Headline>
=======
      <Headline style={styles.title}>Enter your details</Headline>
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
      <Subheading style={styles.text}>Choose a username</Subheading>
      <TextInput
        label="Username"
        mode="outlined"
        placeholder="Enter your username here"
        clearButtonMode="unless-editing"
        autoCompleteType="username"
        style={styles.textInput}
      />
      <Subheading style={styles.text}>Create a password</Subheading>
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Enter your password here"
        style={styles.textInput}
        secureTextEntry={true}
        clearButtonMode="unless-editing"
      />
      <Subheading style={styles.text}>Enter your email</Subheading>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Enter your email here"
        clearButtonMode="unless-editing"
        autoCompleteType="email"
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => signUp(email)}
      >
        Sign Up
      </Button>
    </SafeAreaView>
  );
};

export default connect(null, { signUp })(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
    marginHorizontal: 10,
  },
  title: {
    marginTop: 30,
    marginBottom: 5,
  },
  textInput: {
    paddingHorizontal: 10,
  },
  button: {
<<<<<<< HEAD
    width: 130,
=======
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
    alignSelf: "center",
    marginVertical: 30,
  },
  text: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
