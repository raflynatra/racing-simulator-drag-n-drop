import { RaceContext } from "@/context/RaceContext";
import { leaderboardStyles, styles } from "@/styles/racing-simulator";
import { Link } from "expo-router";
import { useContext } from "react";
import { FlatList, Text, TouchableHighlight, View } from "react-native";

const LeaderboardScreen = () => {
  const { drivers } = useContext(RaceContext);
  const results = drivers.sort((a, b) => a.totalTime - b.totalTime);

  const parseTotalTime = (totalTime: number) => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={leaderboardStyles.container}>
      <Text style={leaderboardStyles.title}>Race Results</Text>

      <FlatList
        data={results}
        keyExtractor={(item) => item.driver_number.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              leaderboardStyles.leaderboardItem,
              index === 0 && leaderboardStyles.firstPlace,
              index === 1 && leaderboardStyles.secondPlace,
              index === 2 && leaderboardStyles.thirdPlace,
            ]}
          >
            <View style={leaderboardStyles.driverInfo}>
              <Text style={leaderboardStyles.name}>{item.full_name}</Text>
              <Text style={leaderboardStyles.driverNumber}>
                #{item.driver_number}
              </Text>
            </View>
            <Text style={leaderboardStyles.time}>
              {parseTotalTime(item.totalTime)}
            </Text>
          </View>
        )}
      />

      <TouchableHighlight style={styles.button}>
        <Link href="/racing-simulator">Race Again</Link>
      </TouchableHighlight>
    </View>
  );
};

export default LeaderboardScreen;
