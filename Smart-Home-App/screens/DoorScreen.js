import React, { useEffect, useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

import DeviceScreen from "./DeviceScreen";
import { SocketContext } from "../utils/socket";
import { updateDevicesValueToStore } from "../store/actions/updateDevicesValueToStore";
import formatData from "../utils/formatData";

const DoorScreen = (props) => {
  const route = useRoute();

  const roomId = route.params.roomId;

  const unlockedDoor = (
    <MaterialCommunityIcons name="door-closed" size={27} color="white" />
  );
  const lockedDoor = (
    <MaterialCommunityIcons name="door-closed-lock" size={27} color="white" />
  );

  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(() => {
    // socket.on('newDevice', (device) => { });

    socket.on("updateDevice", (ObjectId, description, updateData) => {
      const updatedValue = formatData(description, updateData);

      dispatch(updateDevicesValueToStore(roomId, ObjectId, updatedValue));
    });

    //* clean up function
    return () => {
      socket.close();
    };
  }, [socket]);

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/QjgCY95/Background2.png" }}
      resizeMode="cover"
      style={styles.backgroundImage}
      // blurRadius={1}
    >
      <DeviceScreen
        roomId={roomId}
        deviceType="door"
        deviceImage={{ uri: "https://i.ibb.co/Lz8rzJH/Door.png" }}
        numOfButtons="1"
        activeStateText={unlockedDoor}
        inactiveStateText={lockedDoor}
      />
    </ImageBackground>
  );
};

DoorScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Door(s)",
  };
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});

export default DoorScreen;
