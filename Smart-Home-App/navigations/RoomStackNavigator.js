import { createStackNavigator } from "react-navigation-stack";

import RoomScreen from "../screens/RoomScreen";
import LightScreen from "../screens/LightScreen";
import DoorScreen from "../screens/DoorScreen";
import FanScreen from "../screens/FanScreen";
import { defaultHeaderOptions } from "./defaultHeaderOptions";

const RoomStackNavigator = createStackNavigator({
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
}, {
    defaultNavigationOptions: defaultHeaderOptions
})

export default RoomStackNavigator