import React from "react";
import { DefaultTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContentScreen from "../screens/ContentScreen";
import SignUpScreen from "../screens/SignUpScreen";
<<<<<<< HEAD
import { PlaceholderScreen } from "../screens/PlaceholderScreens";
=======
import SettingsScreen from "../screens/SettingsScreen";
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
          component={ContentScreen}
          options={{
            tabBarLabel: "Content",
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="dynamic-feed" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            tabBarLabel: "Sign Up",
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon name="sign-in" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
<<<<<<< HEAD
          component={PlaceholderScreen}
=======
          component={SettingsScreen}
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
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
