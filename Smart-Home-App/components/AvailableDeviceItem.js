import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import BodyText from "./BodyText";
import NormalButton from "./NormalButton";
import { addDevice } from "../store/actions/addDevice";

const AvailableDeviceItem = (props) => {
  const dispatch = useDispatch();

  const addDeviceHandler = () => {
    dispatch(addDevice(props.roomId, props.deviceId));
  };

  return (
    <View style={styles.listItem}>
      <BodyText style={{ fontFamily: "roboto-bold" }}>
        {props.deviceName}
      </BodyText>
      <NormalButton
        buttonStyle={styles.addButton}
        buttonName={
          <Ionicons name="add-circle-outline" size={30} color="black" />
        }
        onPress={addDeviceHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    padding: 0,
  },
});

export default AvailableDeviceItem;
