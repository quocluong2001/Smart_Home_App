import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainStackNavigator from './MainStackNavigator';
import FavoriteStackNavigator from './FavoriteStackNavigator';
import Colors from '../constants/Colors';

const MainTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: MainStackNavigator,
        navigationOptions: {
            tabBarColor: Colors.backgroundColor3,
            tabBarLabel: <Text style={{ fontFamily: 'roboto-bold' }}>Home</Text>,
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons
                        name="home-sharp"
                        size={25}
                        color={tabBarInfo.tintColor}
                    />
                )
            }
        }
    },
    Favorite: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarColor: Colors.backgroundColor3,
            tabBarLabel: <Text style={{ fontFamily: 'roboto-bold' }}>Favorites</Text>,
            tabBarIcon: tabBarInfo => {
                return (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabBarInfo.tintColor}
                    />
                )
            }
        }
    }
}, {
    shifting: true,
    activeColor: Colors.fontColor3,
    inactiveColor: Colors.buttonColor4,
})

export default MainTabNavigator