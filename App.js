import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, Profile, NavBottom, Home, Explore, Bookmark } from "./screens";
import { AppContextProvider } from "./utils/AppContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NavBottom" component={NavBottom} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Bookmark" component={Bookmark} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
