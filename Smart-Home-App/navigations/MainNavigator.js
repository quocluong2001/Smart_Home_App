import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";

import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen";
import RoomScreen from "../screens/RoomScreen";
import LightScreen from "../screens/LightScreen";
import DoorScreen from "../screens/DoorScreen";
import FanScreen from "../screens/FanScreen";
import Colors from "../constants/Colors";

const MainNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
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
        defaultNavigationOptions: {
            headerTintColor: Colors.fontColor3,
            headerTitleStyle: {
                fontFamily: 'r-flex-bold',
                fontSize: 30
            },
            headerStyle: {
                backgroundColor: Colors.backgroundColor3
            },
            headerTitleAlign: "center"
        }
    }
)

export default createAppContainer(MainNavigator)