import { createStackNavigator } from "react-navigation-stack";

import FavoriteRoomScreen from "../screens/FavoriteRoomScreen";
import { defaultHeaderOptions } from "./defaultHeaderOptions";
import RoomStackNavigator from "./RoomStackNavigator";


const FavoriteStackNavigator = createStackNavigator({
    Favorite: {
        screen: FavoriteRoomScreen
    },
    Room: {
        screen: RoomStackNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
},{
    defaultNavigationOptions: defaultHeaderOptions
})

export default FavoriteStackNavigator