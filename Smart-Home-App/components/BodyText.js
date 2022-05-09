import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  return (
    <Text {...props} style={{ ...styles.bodyText, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "roboto",
    fontSize: 16,
  },
});

export default BodyText;
