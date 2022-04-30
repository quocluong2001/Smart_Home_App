import React, { useContext, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

import DeviceScreen from "./DeviceScreen";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";
import { updateDevicesValueToStore } from "../store/actions/updateDevicesValueToStore";
import { SocketContext } from "../utils/socket";
import formatData from "../utils/formatData";

const LightScreen = (props) => {
  const route = useRoute();

  const roomId = route.params.roomId;

  const activeLight = (
    <MaterialCommunityIcons name="lightbulb-outline" size={25} color="white" />
  );
  const inactiveLight = (
    <MaterialCommunityIcons
      name="lightbulb-off-outline"
      size={25}
      color="white"
    />
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

  const sensorsInfo = useSelector(
    selectDevicesInfoByType(roomId, "light sensor")
  );

  //! hard coded
  const sensorInfo = sensorsInfo[0];
  //! end hard coded

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/RQxxLY1/Background1.png" }}
      resizeMode="cover"
      style={styles.backgroundImage}
      // blurRadius={1}
    >
      <DeviceScreen
        roomId={roomId}
        deviceType="light"
        deviceImage={{ uri: "https://i.ibb.co/ncYFpgD/Light.png" }}
        numOfButtons="1"
        activeStateText={activeLight}
        inactiveStateText={inactiveLight}
        informationCard={true}
        infoTitle="Light intensity"
        infoValue={sensorInfo.payload.value}
        infoUnit={sensorInfo.payload.unit}
      />
    </ImageBackground>
  );
};

LightScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Light(s)",
  };
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});

export default LightScreen;
