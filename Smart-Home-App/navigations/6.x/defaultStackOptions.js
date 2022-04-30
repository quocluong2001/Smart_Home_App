import { TransitionPresets } from "@react-navigation/stack";

import Colors from "../../constants/Colors";

export const defaultStackOptions = {
  headerTintColor: Colors.fontColor3,
  headerTitleStyle: {
    fontFamily: "r-flex-bold",
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: Colors.backgroundColor3,
  },
  headerTitleAlign: "center",
  ...TransitionPresets.RevealFromBottomAndroid,
};

export default defaultStackOptions;
