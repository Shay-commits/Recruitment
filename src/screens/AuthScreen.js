import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import { TextInput, Subheading, Headline, Button } from "react-native-paper";
import { signUp } from "../redux/actions";
import { setUser } from "../redux/reducers/loginReducer.js"
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';


const image = {uri : "https://logodix.com/logo/83249.png"}


const LoginScreen = function ({ navigation, logIn  }) {
  // Notice how only email inputs are captured and sent to the store. How would you improve this functionality for your app?
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
    
      
      <Image source={image} style={styles.logo}/>
      
    
      
    
    
      <Subheading style={styles.text}>Email </Subheading>
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Enter your email here"
        clearButtonMode="unless-editing"
        autoCompleteType="email"
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
      />
      <Subheading style={styles.text}>Password</Subheading>
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Enter your password here"
        style={styles.textInput}
        secureTextEntry={true}
        clearButtonMode="unless-editing"
        onChangeText={(text) => setPassword(text)}
      />
  
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => {
        
        let credentials = {
          email,
          password
        }
        console.log(credentials)
        setUser(credentials)
         navigation.navigate('Content')}
        
       
          }
        
      >
       Login
      </Button>
      
      <Button mode="outlined"
      style={styles.button}
      onPress={() => navigation.navigate('SignUp')}> 
        Sign Up 
      </Button>
      
    </SafeAreaView>
  );
};

const SignUpScreen = function ({signUp, navigation}) {
  // Notice how only email inputs are captured and sent to the store. How would you improve this functionality for your app?
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Headline style={styles.title}> Enter your details</Headline>
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




const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator >
      <AuthStack.Screen name="Login" component={LoginScreen} options={{
    headerShown: false
  }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 5,
    marginHorizontal: 10,
    justifyContent: "center",
  
    
  },
  title: {
    marginTop: 30,
    marginBottom: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    },
  button: {
    width: 130,
    alignSelf: "center",
    marginVertical: 30,
  },
  text: {
    paddingHorizontal: 10,
    paddingTop: 20,
    color: "purple"
  },
  
  textBranding: {
    color: "purple"
  },
    logo: {
    width: 66,
    height: 58,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 140,
    marginTop: 80
    
  },
  
  image: {
    flex: 1
  }
});
