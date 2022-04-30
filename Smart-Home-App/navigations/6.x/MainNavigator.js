import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      id="MainNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main_Login" component={LoginScreen} />
      <Stack.Screen name="Main_Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
