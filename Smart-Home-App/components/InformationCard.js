import React from "react";
import { View, StyleSheet } from "react-native";

import BodyText from "./BodyText";
import Colors from "../constants/Colors";

const InformationCard = (props) => {
  return (
    <View style={styles.informationCard}>
      <BodyText style={styles.informationTitleStyle}>
        {props.informationTitle}
      </BodyText>
      <BodyText style={styles.informationTextStyle}>
        <BodyText
          style={{
            ...styles.informationValueTextStyle,
            ...props.valueTextStyle,
          }}
        >
          {props.informationValue}
        </BodyText>{" "}
        {props.informationUnit}
      </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  informationCard: {
    backgroundColor: Colors.backgroundColor1,
    marginVertical: 10,
    width: 180,
    height: 87,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 24,
    padding: 15,
  },

  informationTitleStyle: {
    fontFamily: "roboto-bold",
    fontSize: 20,
    color: Colors.fontColor1,
  },

  informationTextStyle: {
    color: Colors.fontColor1,
  },

  informationValueTextStyle: {
    color: Colors.fontColor5,
    fontSize: 18,
  },
});

export default InformationCard;
