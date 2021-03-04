import React from "react";
import { DefaultTheme, DarkTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomeScreenNew from "../screens/HomeScreenNew";
import ContentStackScreen from "../screens/ContentScreenNew";
import ContentScreenNewNoStack from "../screens/ContentScreenNewNoStack";
import SignUpScreen from "../screens/SignUpScreen";
import AuthStackScreen from "../screens/AuthScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { PlaceholderScreen } from "../screens/PlaceholderScreens";
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux'


const Tab = createMaterialBottomTabNavigator();

export default function () {
  
  const userState = useSelector(state => state.loginReducer)
  console.log(userState)
  
  if (userState == false) {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Sign Up"
        barStyle={{ backgroundColor: DefaultTheme.colors.primary }}
      >
      
      
      
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <CommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Content"
          component={ContentStackScreen}
          options={{
            tabBarLabel: "Content",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="dynamic-feed" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={ AuthStackScreen}
          options={{
            tabBarLabel: "Sign Up",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon name="sign-in" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Icon name="settings" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
  }
  
  else {
    return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Sign Up"
        barStyle={{ backgroundColor: DefaultTheme.colors.primary }}
      >
        <Tab.Screen
          name="HomeScreenNew"
          component={HomeScreenNew}
          options={{
            tabBarLabel: "HomeNew",
            tabBarIcon: ({ color }) => (
              <CommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
      
      
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <CommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Content"
          component={ContentStackScreen}
          options={{
            tabBarLabel: "Content",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="dynamic-feed" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={ HomeScreen}
          options={{
            tabBarLabel: "Sign Up",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon name="sign-in" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={PlaceholderScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Icon name="settings" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
}
