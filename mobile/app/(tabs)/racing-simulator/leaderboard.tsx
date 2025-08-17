import { RaceContext } from "@/context/RaceContext";
import { leaderboardStyles, styles } from "@/styles/racing-simulator";
import { useRouter } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const LeaderboardScreen = () => {
  const router = useRouter();
  const { drivers } = useContext(RaceContext);
  const results = drivers.sort((a, b) => a.totalTime - b.totalTime);

  const parseTotalTime = (totalTime: number) => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <SafeAreaView>
      <View style={leaderboardStyles.container}>
        <View>
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
        </View>

        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Race Again</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
