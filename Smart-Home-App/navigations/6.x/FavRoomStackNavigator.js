import { createStackNavigator } from "@react-navigation/stack";

import FavoriteRoomScreen from "../../screens/FavoriteRoomScreen";
import RoomStackNavigator from "./RoomStackNavigator";
import defaultStackOptions from "./defaultStackOptions";

const Stack = createStackNavigator();

function FavRoomStackNavigator() {
  return (
    <Stack.Navigator
      id="FavRoomStackNavigator"
      screenOptions={{
        ...defaultStackOptions,
      }}
    >
      <Stack.Screen
        name="FavRoomStack_Favorites"
        component={FavoriteRoomScreen}
        options={{
          title: "Favorites",
        }}
      />
      <Stack.Screen
        name="FavRoomStack_Room"
        component={RoomStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FavRoomStackNavigator;
