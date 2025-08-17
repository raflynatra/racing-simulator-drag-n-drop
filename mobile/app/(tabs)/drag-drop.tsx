import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Drag and Drop Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
