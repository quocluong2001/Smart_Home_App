import React from "react";
import { View, StyleSheet } from "react-native";

import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View {...props} style={{ ...styles.header, ...props.style }}>
      <TitleText style={{ color: "#474B74" }}>{props.children}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    marginTop: 35,
    width: "100%",
  },
});

export default Header;
