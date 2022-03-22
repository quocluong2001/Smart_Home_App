import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/LoginScreen";

const MainNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: MainTabNavigator
    }
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(MainNavigator)