import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
  Alert,
  //   Animated,
  //   Easing,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Loading from "./Loading";
import BodyText from "./BodyText";
import Colors from "../constants/Colors";
import RemoveButton from "./RemoveButton";
import { selectDeviceInfoByDeviceId } from "../store/selectors/selectDevicesInfoByRoomId";
import updateDevicesValue from "../store/thunk-functions/updateDevicesValue";
import { removeDevice } from "../store/actions/removeDevice";
import { SocketContext } from "../utils/socket";
import { updateDevicesValueToStore } from "../store/actions/updateDevicesValueToStore";
import formatData from "../utils/formatData";

const DeviceCard = (props) => {
  //* For declaring state and variable ////
  const [isLoading, setIsLoading] = useState(true);
  const roomId = props.roomId;
  const deviceId = props.deviceId;
  const deviceInfo = useSelector(selectDeviceInfoByDeviceId(roomId, deviceId));
  const [switchValue, setSwitchValue] = useState(deviceInfo.payload.value);

  const dispatch = useDispatch(); //* For dispatch action

  //* For switch's action ////
  const switchHandler = () => {
    dispatch(updateDevicesValue({ roomId: roomId, deviceId: deviceId }));
    setSwitchValue(deviceInfo.payload.value);
    // if (switchValue === true) {
    //   startRotate();
    // } else if (switchValue === false) {
    //   stopRotate();
    // }
  };

  //* For undisplay device ////
  const removeDeviceHandler = () => {
    Alert.alert(
      "Confirm device's removal",
      "Are you sure about removing this device?",
      [
        {
          text: "Confirm",
          onPress: () => dispatch(removeDevice(roomId, deviceId)),
        },
        {
          text: "Cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  //* For socket ////
  const socket = useContext(SocketContext);

  useEffect(() => {
    // socket.on('newDevice', (device) => { });

    socket.on("updateDevice", (ObjectId, description, updateData) => {
      const updatedValue = formatData(description, updateData);

      dispatch(updateDevicesValueToStore(roomId, ObjectId, updatedValue));

      if (typeof updatedValue === "boolean") {
        setSwitchValue(updatedValue);
      }
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  //* For display device status ////
  let visibleState;

  if (deviceInfo.payload.value === true) {
    visibleState = props.activeStateText;
  } else {
    visibleState = props.inactiveStateText;
  }

  //* Animation ////
  //   const rotateValue = useRef(new Animated.Value(0)).current;

  //   function startRotate() {
  //     Animated.timing(rotateValue, {
  //       toValue: 1,
  //       duration: 50000,
  //       useNativeDriver: false,
  //       easing: Easing.linear,
  //     }).start();
  //   }

  //   function stopRotate() {
  //     Animated.timing(rotateValue).stop();
  //   }

  //   const rotateData = rotateValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: ["0deg", "360deg"],
  //   });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.container, ...props.style }}>
        <View style={styles.header}>
          <View style={styles.headerLeft} />
          <View style={styles.textContainer}>
            <BodyText style={styles.deviceNameText}>
              {props.deviceName}
            </BodyText>
          </View>
          <View style={styles.headerRight}>
            <RemoveButton buttonColor="red" onRemove={removeDeviceHandler} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageStateContainer}>
            <View style={styles.imageContainer}>
              <Loading visible={isLoading} />
              <Image
                source={props.source}
                resizeMode="contain"
                style={[styles.image]}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Switch
              style={styles.switch}
              value={switchValue}
              onValueChange={switchHandler}
            />
            <View style={styles.stateContainer}>
              <BodyText style={styles.state}>{visibleState}</BodyText>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 260,
    height: 150,
    backgroundColor: Colors.backgroundColor1,
    borderRadius: 24,
  },

  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  headerLeft: {
    width: "20%",
  },

  textContainer: {
    width: "60%",
  },

  headerRight: {
    width: "20%",
    alignItems: "flex-end",
    paddingRight: 10,
  },

  deviceNameText: {
    fontFamily: "roboto-bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },

  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  imageStateContainer: {
    alignItems: "center",
  },

  imageContainer: {
    width: 100,
    height: 100,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  stateContainer: {
    width: 108,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: Colors.backgroundColor1,
    marginTop: 5,
  },

  state: {
    color: "white",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "62%",
  },

  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
});

export default DeviceCard;
