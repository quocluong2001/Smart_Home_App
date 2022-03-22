import { createStackNavigator } from "react-navigation-stack";

import FavoriteDeviceScreen from "../screens/FavoriteDeviceScreen";
import { defaultHeaderOptions } from "./defaultHeaderOptions";

const FavoriteStackNavigator = createStackNavigator({
    Favorite: {
        screen: FavoriteDeviceScreen
    }
},{
    defaultNavigationOptions: defaultHeaderOptions
})

export default FavoriteStackNavigator