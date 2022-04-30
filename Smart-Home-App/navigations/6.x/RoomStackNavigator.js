import { createStackNavigator } from "@react-navigation/stack";

import RoomScreen from "../../screens/RoomScreen";
import LightScreen from "../../screens/LightScreen";
import FanScreen from "../../screens/FanScreen";
import DoorScreen from "../../screens/DoorScreen";
import defaultStackOptions from "./defaultStackOptions";

const Stack = createStackNavigator();

function RoomStackNavigator() {
  return (
    <Stack.Navigator
      id="RoomStackNavigator"
      screenOptions={{
        ...defaultStackOptions,
      }}
    >
      <Stack.Screen name="RoomStack_Room" component={RoomScreen} />
      <Stack.Screen
        name="RoomStack_Light"
        component={LightScreen}
        options={{ title: "Light(s)" }}
      />
      <Stack.Screen
        name="RoomStack_Fan"
        component={FanScreen}
        options={{ title: "Fan(s)" }}
      />
      <Stack.Screen
        name="RoomStack_Door"
        component={DoorScreen}
        options={{ title: "Door(s)" }}
      />
    </Stack.Navigator>
  );
}

export default RoomStackNavigator;
