import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import PlayVideoList from "./../Screens/Home/PlayVideoList";

const Stack = createStackNavigator();
export default function HomeScreenNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="play-video" component={PlayVideoList} />
        </Stack.Navigator>
    );
}
