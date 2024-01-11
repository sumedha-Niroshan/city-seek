import { View, Text } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNatigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="home-sharp" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarLabel: "Fav",
          tabBarIcon: ({ color, size }) => {
            <MaterialIcons name="favorite" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => {
            <Fontisto name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            <AntDesign name="profile" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
