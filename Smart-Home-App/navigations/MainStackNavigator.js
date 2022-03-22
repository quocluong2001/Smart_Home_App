import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen";
import RoomScreen from "../screens/RoomScreen";
import LightScreen from "../screens/LightScreen";
import DoorScreen from "../screens/DoorScreen";
import FanScreen from "../screens/FanScreen";
import { defaultHeaderOptions } from "./defaultHeaderOptions";

const MainStackNavigator = createStackNavigator(
    {
        // Login: {
        //     screen: LoginScreen,
        //     navigationOptions: {
        //         headerShown: false,
        //     }
        // },
        Home: {
            screen: HomeScreen
        },
        Room: {
            screen: RoomScreen
        },
        Light: {
            screen: LightScreen
        },
        Door: {
            screen: DoorScreen
        },
        Fan: {
            screen: FanScreen
        },
    },
    {
        defaultNavigationOptions: defaultHeaderOptions
    }
)

export default MainStackNavigator