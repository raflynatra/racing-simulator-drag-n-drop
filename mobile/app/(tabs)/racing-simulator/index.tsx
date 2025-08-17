import DriverItem from "@/components/racing-simulator/driver-item";
import { RaceContext } from "@/context/RaceContext";
import { styles } from "@/styles/racing-simulator";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const RacingSimulatorScreen = () => {
  const router = useRouter();
  const { drivers, isRacing, isFinished, startRace, resetRace } =
    useContext(RaceContext);
  const sortedDrivers = drivers.sort((a, b) => b.distance - a.distance);

  React.useEffect(() => {
    if (isFinished) {
      router.push("/(tabs)/racing-simulator/leaderboard");
    }
  }, [isFinished]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>F1 Racing Simulator</Text>
          <Text style={styles.text}>Experience the thrill of F1 racing!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[styles.button, isRacing ? styles.disabledButton : {}]}
            onPress={startRace}
            disabled={isRacing}
          >
            <Text style={styles.buttonText}>
              {isRacing ? "Race in Progress" : "Start Race"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={resetRace}>
            <Text style={styles.buttonText}>Reset Race</Text>
          </TouchableHighlight>
        </View>

        {isRacing && (
          <FlatList
            data={sortedDrivers}
            keyExtractor={(item) => item.driver_number.toString()}
            renderItem={({ item }) => <DriverItem driver={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default RacingSimulatorScreen;
