import { Driver } from "@/context/RaceContext";
import { driverItemStyles } from "@/styles/racing-simulator";
import React from "react";
import { Text, View } from "react-native";

interface DriverItemProps {
  driver: Driver;
}

const DriverItem: React.FC<DriverItemProps> = ({ driver }) => {
  return (
    <View
      style={[
        driverItemStyles.container,
        driver.status === "Finished" && { backgroundColor: "#90EE90" },
      ]}
    >
      <Text style={driverItemStyles.name}>{driver.full_name}</Text>
      <View style={driverItemStyles.details}>
        <Text>Speed: {driver.speed.toFixed(0)} km/h</Text>
        <Text>Distance: {driver.distance.toFixed(0)} m</Text>
      </View>
    </View>
  );
};

export default DriverItem;
