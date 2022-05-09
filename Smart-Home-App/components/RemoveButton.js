import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RemoveButton = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onRemove}>
      <View>
        <Ionicons name="trash-outline" size={25} color={props.buttonColor} />
      </View>
    </TouchableOpacity>
  );
};

export default RemoveButton;
