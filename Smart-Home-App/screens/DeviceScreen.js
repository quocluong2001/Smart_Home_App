import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import NormalButton from "../components/NormalButton";
import AddDeviceModal from "../components/AddDeviceModal";
import DeviceList from "../components/DeviceList";
import InformationCard from "../components/InformationCard";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";
import { changeValueTextStyle } from "../utils/changeValueTextStyle";

const DeviceScreen = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const roomId = props.roomId;
  const deviceType = props.deviceType;

  const devicesInfo = useSelector(selectDevicesInfoByType(roomId, deviceType));

  const openAddModeHandler = () => {
    setIsAddMode(true);
  };

  const cancelAddModeHandler = () => {
    setIsAddMode(false);
  };

  const infoTitle = props.infoTitle;
  const infoValue = props.infoValue;
  const infoUnit = props.infoUnit;

  let tempValueTextStyle = changeValueTextStyle(infoTitle, infoValue);

  let informationCard;

  if (props.informationCard) {
    informationCard = (
      <InformationCard
        informationTitle={infoTitle}
        informationValue={infoValue}
        informationUnit={infoUnit}
        valueTextStyle={tempValueTextStyle}
      />
    );
  }

  return (
    <View style={styles.screen}>
      {informationCard}
      <DeviceList
        roomId={roomId}
        listData={devicesInfo}
        numOfButtons={props.numOfButtons}
        deviceImage={props.deviceImage}
        activeStateText={props.activeStateText}
        inactiveStateText={props.inactiveStateText}
      />
      <NormalButton
        buttonStyle={styles.manageDeviceCardButton}
        buttonName={<Ionicons name="add" size={40} color="white" />}
        onPress={openAddModeHandler}
      />
      <AddDeviceModal
        visible={isAddMode}
        onCancel={cancelAddModeHandler}
        roomId={roomId}
        deviceType={deviceType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  button: {
    backgroundColor: Colors.buttonColor3,
  },

  buttonText: {
    color: Colors.fontColor1,
  },

  manageDeviceCardButton: {
    height: 70,
    width: 70,
    backgroundColor: Colors.backgroundColor1,
    marginBottom: 10,
    padding: 0,
  },
});

export default DeviceScreen;
