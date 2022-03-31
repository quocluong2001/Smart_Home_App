import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import RoomStackNavigator from "./RoomStackNavigator";
import { defaultHeaderOptions } from "./defaultHeaderOptions";

const MainStackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Room: {
            screen: RoomStackNavigator,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        defaultNavigationOptions: defaultHeaderOptions
    }
)

export default MainStackNavigator