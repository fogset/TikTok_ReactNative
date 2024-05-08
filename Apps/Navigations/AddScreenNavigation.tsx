import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "../Screens/Add/Add";
import Preview from "../Screens/Add/Preview";
import styled from "styled-components/native";
const Stack = createStackNavigator();
export default function AddScreenNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="add-screen" component={Add} />
            <Stack.Screen name="preview-screen" component={Preview} />
        </Stack.Navigator>
    );
}
