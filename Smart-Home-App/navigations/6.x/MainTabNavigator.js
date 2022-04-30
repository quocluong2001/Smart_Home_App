import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

import MainStackNavigator from "./MainStackNavigator";
import FavRoomStackNavigator from "./FavRoomStackNavigator";

const Tab = createMaterialBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      id="MainTabNavigator"
      shifting={true}
      activeColor={Colors.fontColor3}
      inactiveColor={"grey"}
      screenOptions={{ tabBarColor: Colors.backgroundColor3 }}
    >
      <Tab.Screen
        name="MainTab_Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={25} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="MainTab_Favorites"
        component={FavRoomStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={25} color={color} />
          ),
          tabBarLabel: "Favorites",
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
