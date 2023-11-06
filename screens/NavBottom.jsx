import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Entypo, FontAwesome } from "@expo/vector-icons";

import Home from "./Home";
import Explore from "./Explore";
import Bookmark from "./Bookmark";
import Profile from "./Profile";

export default function NavBottom() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Entypo name="home" size={24} color={"#1877F2"} />;
            }
            return <Entypo name="home" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome name="safari" size={24} color={"#1877F2"} />;
            }
            return <FontAwesome name="safari" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FontAwesome name="bookmark" size={24} color={"#1877F2"} />
              );
            }
            return <FontAwesome name="bookmark" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FontAwesome name="user-circle" size={24} color={"#1877F2"} />
              );
            }
            return <FontAwesome name="user-circle" size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
