import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import BodyText from "./BodyText";

const NormalButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.buttonStyle }}>
        <BodyText style={{ ...styles.buttonText, ...props.buttonTextStyle }}>
          {props.buttonName}
        </BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  buttonText: {
    textAlign: "center",
  },
});

export default NormalButton;
