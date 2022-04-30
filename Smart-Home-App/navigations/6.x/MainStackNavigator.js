import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import RoomStackNavigator from "./RoomStackNavigator";
import defaultStackOptions from "./defaultStackOptions";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        id="MainStackNavigator"
        screenOptions={{
          ...defaultStackOptions,
        }}
      >
        <Stack.Screen
          name="MainStack_Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="MainStack_Room"
          component={RoomStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default MainStackNavigator;
