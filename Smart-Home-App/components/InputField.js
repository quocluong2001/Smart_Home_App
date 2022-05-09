import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const InputField = (props) => {
  return (
    <View style={{ ...styles.inputContainer, ...props.containerStyle }}>
      <TextInput
        {...props}
        style={{ ...styles.inputText, ...props.textInputStyle }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },

  inputText: {
    fontFamily: "roboto",
    fontSize: 16,
    color: Colors.fontColor2,
    backgroundColor: Colors.backgroundColor2,
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
});

export default InputField;
