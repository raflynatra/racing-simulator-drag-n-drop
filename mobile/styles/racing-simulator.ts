import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    gap: 8,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
    gap: 16,
  },
  button: {
    padding: 16,
    borderWidth: 2,
    backgroundColor: "#162456",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});

export const driverStyles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    fontSize: 16,
    color: "#666",
  },
});

export const driverItemStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  details: {
    alignItems: "flex-end",
  },
  pit: {
    color: "red",
    fontWeight: "bold",
  },
});

export const leaderboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  leaderboardItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  driverInfo: {
    flex: 1,
  },
  driverNumber: {
    fontSize: 12,
    color: "#666",
  },
  firstPlace: {
    backgroundColor: "gold",
  },
  secondPlace: {
    backgroundColor: "silver",
  },
  thirdPlace: {
    backgroundColor: "#cd7f32",
  },
});
