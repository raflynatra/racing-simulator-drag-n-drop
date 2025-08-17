import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="racing-simulator"
        options={{
          title: "F1 Racing Simulator",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="speed" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="drag-drop"
        options={{
          title: "Drag & Drop",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="drag-handle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
