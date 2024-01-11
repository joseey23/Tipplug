import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import JoinPool from "./screens/JoinPool";
import SearchPool from "./screens/SearchPool";
import UserDetails from "./screens/UserDetails";
import ListPools from "./screens/ListPools";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Join" component={JoinPool} />
        <Stack.Screen name="Search" component={SearchPool} />
        <Stack.Screen name="Details" component={UserDetails} />
        <Stack.Screen name="List" component={ListPools} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
